import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface Chapter {
  slug: string;
  title: string;
  order: number;
  content: string;
  type: 'front-matter' | 'chapter' | 'back-matter';
}

const manuscriptDirectory = path.join(process.cwd(), 'manuscript');

// Define the content structure
const FRONT_MATTER_FILES = ['dedication', 'preface'];
const BACK_MATTER_FILES = ['about-the-author', 'acknowledgements', 'afterword'];
const EXCLUDED_FILES = ['titlepage', 'copyright', 'toc', 'back-cover']; // These are integrated into homepage or excluded from reading

function getContentType(filename: string): 'front-matter' | 'chapter' | 'back-matter' | 'excluded' {
  const slug = filename.replace(/\.md$/, '');
  if (FRONT_MATTER_FILES.includes(slug)) return 'front-matter';
  if (BACK_MATTER_FILES.includes(slug)) return 'back-matter';
  if (EXCLUDED_FILES.includes(slug)) return 'excluded';
  return 'chapter';
}

function getOrder(filename: string, type: string): number {
  const slug = filename.replace(/\.md$/, '');
  
  if (type === 'front-matter') {
    return FRONT_MATTER_FILES.indexOf(slug);
  }
  
  if (type === 'back-matter') {
    return BACK_MATTER_FILES.indexOf(slug);
  }
  
  // For chapters, extract number from filename
  const orderMatch = filename.match(/^(\d+)-/);
  return orderMatch ? parseInt(orderMatch[1], 10) : 999;
}

function parseFile(file: string): Chapter | null {
  const type = getContentType(file);
  if (type === 'excluded') return null;
  
  const slug = file.replace(/\.md$/, '');
  const fullPath = path.join(manuscriptDirectory, file);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  
  const order = getOrder(file, type);
  
  // Extract title from first heading or use filename
  const titleMatch = content.match(/^#\s+(.+)$/m);
  const title = data.title || titleMatch?.[1] || slug;
  
  return {
    slug,
    title,
    order,
    content,
    type,
  };
}

export function getAllChapters(): Chapter[] {
  try {
    const files = fs.readdirSync(manuscriptDirectory);
    
    const chapters = files
      .filter(file => file.endsWith('.md') && !file.startsWith('.'))
      .map(parseFile)
      .filter((ch): ch is Chapter => ch !== null && ch.type === 'chapter')
      .sort((a, b) => a.order - b.order);
    
    return chapters;
  } catch (error) {
    console.error('Error reading chapters:', error);
    return [];
  }
}

export function getFrontMatter(): Chapter[] {
  try {
    const files = fs.readdirSync(manuscriptDirectory);
    
    const frontMatter = files
      .filter(file => file.endsWith('.md') && !file.startsWith('.'))
      .map(parseFile)
      .filter((ch): ch is Chapter => ch !== null && ch.type === 'front-matter')
      .sort((a, b) => a.order - b.order);
    
    return frontMatter;
  } catch (error) {
    console.error('Error reading front matter:', error);
    return [];
  }
}

export function getBackMatter(): Chapter[] {
  try {
    const files = fs.readdirSync(manuscriptDirectory);
    
    const backMatter = files
      .filter(file => file.endsWith('.md') && !file.startsWith('.'))
      .map(parseFile)
      .filter((ch): ch is Chapter => ch !== null && ch.type === 'back-matter')
      .sort((a, b) => a.order - b.order);
    
    return backMatter;
  } catch (error) {
    console.error('Error reading back matter:', error);
    return [];
  }
}

export function getAllContent(): Chapter[] {
  const frontMatter = getFrontMatter();
  const chapters = getAllChapters();
  const backMatter = getBackMatter();
  
  return [...frontMatter, ...chapters, ...backMatter];
}

export function getChapterBySlug(slug: string): Chapter | null {
  try {
    const fullPath = path.join(manuscriptDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    const type = getContentType(`${slug}.md`);
    if (type === 'excluded') return null;
    
    const order = getOrder(`${slug}.md`, type);
    
    const titleMatch = content.match(/^#\s+(.+)$/m);
    const title = data.title || titleMatch?.[1] || slug;
    
    return {
      slug,
      title,
      order,
      content,
      type,
    };
  } catch (error) {
    console.error('Error reading chapter:', error);
    return null;
  }
}

export function getAdjacentChapters(currentSlug: string): { prev: Chapter | null; next: Chapter | null } {
  const allContent = getAllContent();
  const currentIndex = allContent.findIndex(ch => ch.slug === currentSlug);
  
  return {
    prev: currentIndex > 0 ? allContent[currentIndex - 1] : null,
    next: currentIndex < allContent.length - 1 ? allContent[currentIndex + 1] : null,
  };
}
