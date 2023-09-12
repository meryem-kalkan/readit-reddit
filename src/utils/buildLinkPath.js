export const buildLinkPath = (pathname, section) => {
  if (pathname === '/') {
    return `/${section}`
  }

    const pathEndsWithHot = pathname.endsWith('hot');
    const pathEndsWithNew = pathname.endsWith('new');
    const pathEndsWithRising = pathname.endsWith('rising');

    switch(section) {
        case 'hot':
            if (pathEndsWithHot) 
             return pathname;
            if (pathEndsWithNew)
            return pathname.replace('new', 'hot')
            if (pathEndsWithRising)
            return pathname.replace('rising', 'hot')
        return pathname + 'hot';

        case 'new':
            if (pathEndsWithNew) 
            return pathname;
           if (pathEndsWithHot)
           return pathname.replace('hot', 'new')
           if (pathEndsWithRising)
           return pathname.replace('rising', 'new')
        return pathname + 'new'; 
            
        case 'rising':
            if (pathEndsWithRising) 
            return pathname;
           if (pathEndsWithNew)
           return pathname.replace('new', 'rising')
           if (pathEndsWithHot)
           return pathname.replace('hot', 'rising')
        return pathname + 'rising';
            
        default:
            return console.error("Unexpected section argument");    
    }
  
}