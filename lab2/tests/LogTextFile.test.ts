import { Directory } from './../src/Directory';
import { LogTextFile } from './../src/LogTextFile';

describe('Log text file', () => {
  const rootDir = new Directory(null, 'root');
  const fileName = 'fileName';
  const logTextFile = new LogTextFile(rootDir, fileName);

  it('should have a proper name', () => {
    expect(logTextFile.name).toBe(fileName);
  });

  it('should have a proper parent', () => {
    expect(logTextFile.parent).toBe(rootDir);
  });

  it('should be empty as default content', () => {
    expect(logTextFile.content).toBe('');
  });

  it('should append content to the end of the file', () => {
    logTextFile.append('item1');
    expect(logTextFile.content).toBe('item1\n');
    logTextFile.append('item2');
    expect(logTextFile.content).toBe('item1\nitem2\n');
  });
});