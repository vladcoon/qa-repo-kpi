import { Directory } from './../src/Directory';

jest.mock('../../config.ts', () => ({
    DIR_MAX_ELEMS: 2,
  }));
describe('Directory', () => {
    const rootDir = new Directory(null, 'root');
    const dirName = 'dirName';
    const dir = new Directory(rootDir, dirName);

    it('should contain proper items', () => {
        expect(rootDir.content[0].name).toEqual(dir.name);
    });

    it('should have a proper dirname', () => {
        expect(dir.name).toBe(dirName);
    });

    it('should have a proper parent', () => {
        expect(dir.parent).toBe(rootDir);
    });

    it('should have empty items by default', () => {
        expect(dir.content.length).toBe(0);
    });

    it('moving the root directory', () => {
        expect(() => {
        const newDir = new Directory(null, 'newDir');
        rootDir.moveTo(newDir);
        }).toThrowError();
    });

    it('overflowing the directory', () => {
        expect(() => {
        dir.addFile(new Directory(null, 'dirName1'));
        dir.addFile(new Directory(null, 'dirName2'));
        dir.addFile(new Directory(null, 'dirName3'));
        }).toThrowError();
    });
});