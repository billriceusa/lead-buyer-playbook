import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface Chapter {
  slug: string;
  title: string;
  order: number;
  content: string;
}

const manuscriptDirectory = path.join(process.cwd(), 'manuscript');

export function getAllChapters(): Chapter[] {
  try {
    const files = fs.readdirSync(manuscriptDirectory);
    
    const chapters = files
      .filter(file => file.endsWith('.md') && !file.startsWith('.'))
      .map(file => {
        const slug = file.replace(/\.md$/, '');
        const fullPath = path.join(manuscriptDirectory, file);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);
        
        // Extract chapter number from filename (e.g., "01-chapter-name.md" -> 1)
        const orderMatch = file.match(/^(\d+)-/);
        const order = orderMatch ? parseInt(orderMatch[1], 10) : 999;
        
        // Extract title from first heading or use filename
        const titleMatch = content.match(/^#\s+(.+)$/m);
        const title = data.title || titleMatch?.[1] || slug;
        
        return {
          slug,
          title,
          order,
          content,
        };
      })
      .sort((a, b) => a.order - b.order);
    
    return chapters;
  } catch (error) {
    console.error('Error reading chapters:', error);
    return [];
  }
}

export function getChapterBySlug(slug: string): Chapter | null {
  try {
    const fullPath = path.join(manuscriptDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    const orderMatch = slug.match(/^(\d+)-/);
    const order = orderMatch ? parseInt(orderMatch[1], 10) : 999;
    
    const titleMatch = content.match(/^#\s+(.+)$/m);
    const title = data.title || titleMatch?.[1] || slug;
    
    return {
      slug,
      title,
      order,
      content,
    };
  } catch (error) {
    console.error('Error reading chapter:', error);
    return null;
  }
}

export function getAdjacentChapters(currentSlug: string): { prev: Chapter | null; next: Chapter | null } {
  const allChapters = getAllChapters();
  const currentIndex = allChapters.findIndex(ch => ch.slug === currentSlug);
  
  return {
    prev: currentIndex > 0 ? allChapters[currentIndex - 1] : null,
    next: currentIndex < allChapters.length - 1 ? allChapters[currentIndex + 1] : null,
  };
}


