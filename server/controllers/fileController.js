const File = require('../models/fileModel');
const fs = require('fs');
const path = require('path');
const formidable = require('formidable');

const storagePath = path.join(__dirname, '../../storage');

if (!fs.existsSync(storagePath)) {
  fs.mkdir(storagePath, (err) => {
    if (err) {
      console.log(`fileController.init - Error: ${err}`);
    }
  });
}

const fileController = {
  getAll(req, res) {
    File.fetchAll()
      .then(files => res.json(files))
      .catch((err) => {
        console.log(`fileController.getAll - Error: ${err}`);
        res.sendStatus(500);
      });
  },

  getFileById({ params: { id }, baseUrl, originalUrl }, res) {
    File.forge({ id })
      .fetch()
      .then((file) => {
        if (file) {
          const stream = fs.createReadStream(path.join(storagePath, `./${file.id}`));

          res.setHeader('Content-Disposition', `inline; filename=${file.get('name')}`);
          res.type(file.get('name'));
          stream.pipe(res);
        } else {
          res.status(404).json({
            error: {
              message: 'Not Found',
            },
            request: {
              endpoint: baseUrl,
              url: originalUrl,
              parameters: {
                id,
              },
            },
          });
        }
      })
      .catch((err) => {
        console.log(`fileController.getFileById - Error: ${err}`);
        res.sendStatus(500);
      });
  },

  // TODO: Implement function
  // updateFileById(req, res) {
  //
  // },

  deleteFileById({ params: { id }, baseUrl, originalUrl }, res) {
    File.forge({ id })
      .fetch()
      .then((file) => {
        fs.unlinkSync(path.join(storagePath, './', id));
        return file.destroy();
      })
      .then(() => res.status(200).json({
        status: 'success',
      }))
      .catch((err) => {
        console.log(`fileController.deleteFileById - Error: ${err}`);
        res.status(404).json({
          error: {
            message: 'Cannot delete file',
          },
          request: {
            endpoint: baseUrl,
            url: originalUrl,
            parameters: {
              id,
            },
          },
        });
      });
  },

  /**
   * Save any files given in the request
   *  - use formidable to parse request
   *  - iterates over each file
   *    - makes a new db entry for each
   *    - moves the file from the temp storage to the storagePath
   *    - set's the key value as the form input keys
   *  - once all promise's are done sends a array of objects back, where each
   *    object is a file db entry
   * @param  object req http request
   * @param  object res http response
   */
  newFile(req, res) {
    const form = new formidable.IncomingForm();

    form.parse(req, (error, fields, files) => {
      Promise.all(Object.keys(files).map((fileKey) => {
        const inputFile = files[fileKey];

        return File.forge({ name: inputFile.name })
          .save()
          .then((file) => {
            fs.rename(inputFile.path, path.join(storagePath, `./${file.id}`), (err) => {
              if (err) {
                console.log(`fileController.newFile.moveFile - Error: ${err}`);
              }
            });
            file.set('key', fileKey);
            return file;
          });
      }))
      .then(result => res.json(result))
      .catch((err) => {
        console.log(`fileController.newFile - Error: ${err}`);
      });
    });
  },

};

module.exports = fileController;
