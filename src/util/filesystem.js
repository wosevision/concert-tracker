// Taking care of the browser-specific prefixes.
window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem
window.directoryEntry = window.directoryEntry || window.webkitDirectoryEntry

const FileError = window.FileError || Error

/**
 * @param {FileError} error
 */
function onError (error) {
  if (typeof error === FileError) {
    console.error('FileError occurred:', error)
  } else {
    console.error('unknown error occurred:', error)
  }
}

/**
 * @param {string} directoryName
 * @param {function} cb
 * @returns {function}
 */
function createOnFs (directoryName, cb) {
  return fs => {
    fs.root.getDirectory(directoryName, { create: false }, cb, onError)
  }
}

/**
 * @export
 * @param {FileSystemEntry} directory
 * @returns {array}
 */
export function readDirectory (directory) {
  const dirReader = directory.createReader()
  let entries = []
  const getEntries = () => {
    dirReader.readEntries(results => {
      if (results.length) {
        entries = entries.concat([...results])
        getEntries()
      }
    }, onError)
  }
  getEntries()
  return entries
}

/**
 * @export
 * @param {string} directoryName
 * @param {function} cb
 * @example
 * ```js
 * import * as fs from '../util/filesystem'
 *
 * fs.getDirectory('./', directory => {
 *   const entries = fs.readDirectory(directory)
 *   console.log('FS:', directory, entries)
 * })
 * ```
 */
export function getDirectory (directoryName, cb) {
  const onFs = createOnFs(directoryName, cb)
  // Opening a file system with temporary storage
  window.requestFileSystem(window.PERSISTENT, 1024 * 1024, onFs, onError)
}
