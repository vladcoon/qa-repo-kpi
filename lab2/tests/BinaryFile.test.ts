import { Directory } from './../src/Directory';
import { BinaryFile } from './../src/BinaryFile';

describe('Binary File', () => {
    const dir = new Directory(null, 'root');

    it('should have a proper parent', () => {
        const binaryFile = new BinaryFile(dir, 'fileName1');
        expect(binaryFile.parent).toBe(dir);
    });

    it('should have a proper name', () => {
        const binaryFile = new BinaryFile(dir, 'fileName2');
        expect(binaryFile.name).toEqual('fileName2');
    });

    it('should be filled with proper content', () => {
        const buffer = new ArrayBuffer(32);
        const binaryFile = new BinaryFile(dir, 'fileName3', buffer);
        expect(binaryFile.content).toBe(buffer);
    });

    it('should be empty as default content', () => {
        const binaryFile = new BinaryFile(dir, 'fileName4');
        expect(binaryFile.content).toBe('');
    });

});