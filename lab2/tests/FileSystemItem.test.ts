import { Directory } from './../src/Directory';
import { BinaryFile } from './../src/BinaryFile';

describe('File System Item', () => {
  const rootDir = new Directory(null, 'root');

  it('file should be deleted', () => {
    const binaryFile = new BinaryFile(rootDir, 'file1');
    expect(rootDir.files.length).toBe(1);

    binaryFile.delete();
    expect(rootDir.files.length).toBe(0);
  });

  it('should throw error if create two files with same names', () => {
    const filename = 'filename';

    expect(() => {
      new BinaryFile(rootDir, filename);
      new BinaryFile(rootDir, filename);
    }).toThrowError();
  });

  it('file should be moved', () => {
    const newDir = new Directory(null, 'dir');
    rootDir.addFile(newDir);

    const binaryFile = new BinaryFile(rootDir, 'file2');
    expect(rootDir.content.includes(binaryFile)).toBeTruthy();

    binaryFile.moveTo(newDir);
    expect(newDir.content.includes(binaryFile)).toBeTruthy();
  });
});