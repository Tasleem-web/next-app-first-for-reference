import { useEffect } from 'react';

function useDocumentTitle(count) {
    useEffect(() => {
        document.title = `Count ${count}`;
    }, [count])
}

export default useDocumentTitle;

// import { useEffect } from 'react';

// function useDocumentTitle(count) {
//     let propsCount = count instanceof Array ? [] : (typeof (count) == 'number' ? [count] : []);
//     console.log(propsCount);
//     useEffect(() => {
//         if (count && count.length) {
//             for (let index = 0; index < count.length; index++) {
//                 var meta = document.createElement('meta');
//                 meta.httpEquiv = count[index].http_equiv;
//                 meta.content = count[index].content;
//                 document.getElementsByTagName('head')[0].appendChild(meta);
//             }
//         } else {
//             document.title = `Count ${propsCount}`;
//         }
//     }, propsCount)
// }

// export default useDocumentTitle;