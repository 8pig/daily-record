const dfs = root => {
    console.log(root.val);
    root.children.forEach(item => dfs(item));
}
const root =  {
    val: 'a',
    children: [
        {
        val: 'b',
        children: []
        },
        {
            val: 'c',
            children: []
        },
        {
            val: 'd',
            children: []
        }
        ]
}
dfs(root)
