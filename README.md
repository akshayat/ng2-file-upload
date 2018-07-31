Copy of library https://valor-software.com/ng6-file-upload/, code - https://github.com/valor-software/ng6-file-upload.

Compatible with angular 6. 

## Usage

use `ng6FileSelect` instead of `ng2FileSelect` and `ng6FileDrop` instead of `ng2FileDrop`

---
Below is the dedscription from original plugin

## ng6-file-upload 

Easy to use Angular2 directives for files upload ([demo] (original version)(http://valor-software.github.io/ng6-file-upload/))


## Quick start

1. A recommended way to install ***ng6-file-upload*** is through [npm](https://www.npmjs.com/search?q=ng6-file-upload) package manager using the following command:

  `npm i ng6-file-upload --save`

  Alternatively, you can [download it in a ZIP file](https://github.com/valor-software/ng6-file-upload/archive/master.zip).

2. Currently `ng6-file-upload` contains two directives: `ng6-file-select` and `ng6-file-drop`. `ng6-file-select` is used for 'file-input' field of form and
  `ng6-file-drop` is used for area that will be used for dropping of file or files.

  
## Using ***ng6-file-upload*** in a project

1. Install as shown in the above section.

2. Import `FileUploadModule` into the module that declares the component using ***ng6-file-upload***:

```import { FileUploadModule } from 'ng6-file-upload';```

3. Add it to `[imports]` under `@NgModule`:

```imports: [ ... FileUploadModule, ... ]```

4. Import `FileUploader` into the component:

```import {  FileUploader } from 'ng6-file-upload';```

5. Create a variable for the API url:

```const URL = 'path_to_api';```

6. Initialize it:

```public uploader:FileUploader = new FileUploader({url: URL}); ```

## API for `ng6FileSelect`

### Properties

  - `uploader` - (`FileUploader`) - uploader object. See using in 

### Events
 - `onFileSelected` - fires when files are selected and added to the uploader queue

## API for `ng6FileDrop`

### Properties

  - `uploader` - (`FileUploader`) - uploader object. 

  Parameters supported by this object:

  1. `url` - URL of File Uploader's route
  2. `authToken` - Auth token that will be applied as 'Authorization' header during file send.
  3. `disableMultipart` - If 'true', disable using a multipart form for file upload and instead stream the file. Some APIs (e.g. Amazon S3) may expect the file to be streamed rather than sent via a form. Defaults to false.
  4. `itemAlias` - item alias (form name redefenition)
  5. `formatDataFunction` - Function to modify the request body. 'DisableMultipart' must be 'true' for this function to be called.
  6. `formatDataFunctionIsAsync` - Informs if the function sent in 'formatDataFunction' is asynchronous. Defaults to false.
  7. `parametersBeforeFiles` - States if additional parameters should be appended before or after the file. Defaults to false.

### Events

  - `fileOver` - it fires during 'over' and 'out' events for Drop Area; returns `boolean`: `true` if file is over Drop Area, `false` in case of out.
  
  - `onFileDrop` - it fires after a file has been dropped on a Drop Area; you can pass in `$event` to get the list of files that were dropped. i.e. `(onFileDrop)="dropped($event)"`

### License

The MIT License
