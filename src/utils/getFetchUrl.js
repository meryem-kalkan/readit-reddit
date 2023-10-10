export const getFetchUrl = (pathname, search) => {
    if (search) {
        return `https://www.reddit.com/search.json${search}`;
    }
return `https://www.reddit.com${pathname}.json`;
}