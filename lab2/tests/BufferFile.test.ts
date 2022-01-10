import { Directory } from './../src/Directory';
import { BufferFile } from './../src/BufferFile';

jest.mock('../../config.ts', () => ({
    DIR_MAX_ELEMS: 2,
  }));

describe('Buffer file', () => {
    const dir = new Directory(null, 'root');
    const filename = 'fileName';
    const bufferFile = new BufferFile(dir, filename);

    it('should have a proper name', () => {
        expect(bufferFile.name).toBe(filename);
    });

    it('should have a proper parent', () => {
        expect(bufferFile.parent).toBe(dir);
    });

    it('reading data from the empty buffer', () => {
        expect(() => bufferFile.content).toThrowError();
    });

    it('should work like a queue', () => {
        const content = ['item1', 'item2'];
        const file = new BufferFile(dir, 'fileName2', content);
        expect(file.consume()).toEqual('item1');
        expect(file.consume()).toEqual('item2');
        expect(file.consume()).toEqual(undefined);
    
        file.push('item3');
        file.push('item4');
    
        expect(file.consume()).toEqual('item3');
        expect(file.consume()).toEqual('item4');
    });

    it('should throw error if is more items than MAX_BUF_FILE_SIZE provided', () => {
        expect(() => {
        bufferFile.push('item1');
        bufferFile.push('item2');
        bufferFile.push('item3');
        }).toThrowError();
    });
});