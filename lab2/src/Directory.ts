import { File } from './File';
import { DIR_MAX_ELEMS } from '../config';

export class Directory extends File {
  constructor(
    public parent: Directory | null = null,
    public readonly name?: string,
    public files: File[] = [],
    ) {
    super(parent, name);
  }

  public addFile(file: File): void {
    if (this.files.length + 1 > Number(DIR_MAX_ELEMS)) {
      throw new Error('Directory file limit is exhausted');
    }

    file.parent = this;
    this.files.push(file);
  }

  get content(): File[] {
    return this.files;
  }
}