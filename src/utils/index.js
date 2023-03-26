import { files } from '../webcontainer/files';

export function getNotePath(chapter) {
  return {
    javascript: {
      path: `/notes/${chapter}/index.js`,
      contents:
        files.notes.directory[chapter].directory?.['index.js']?.file?.contents,
    },
    html: {
      path: `/notes/${chapter}/index.html`,
      contents:
        files.notes.directory[chapter].directory?.['index.html']?.file
          ?.contents,
    },
    md: {
      path: `/notes/${chapter}/note.md`,
      contents:
        files.notes.directory[chapter].directory?.['note.md']?.file?.contents,
    },
  };
}
