
const useTraverseTree = () => {
    function insertNode (tree, folderId, item, isMain) {
        if (tree.id === folderId && tree.isMain) {
            tree.items.unshift({
                id: new Date().getTime(),
                name: item,
                isMain,
                items: []
            })
            return tree;
        }
        
    
        let latestNode = []
        latestNode = tree.items.map((obj) => {
            return insertNode(obj, folderId, item, isMain)
        })
        return { ...tree, items: latestNode }
    }
    return { insertNode }
    
}

export default useTraverseTree
