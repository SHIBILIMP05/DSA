class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}
class BinarySearchTree{
    constructor(){
        this.root = null
    }
    isEmpty(){
        return this.root===null
    }
    insert(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.root = node
        }else{
            this.insertNode(this.root,node)
        }
    }

    insertNode(root,node){
        if(node.value < root.value){
            if(root.left === null){
                root.left = node
            }else{
                this.insertNode(root.left,node)
            }
        }else{
            if(root.right === null){
                root.right = node
            }else{
                this.insertNode(root.right,node)
            }
        }
    }
   min(root=this.root){
    if(!root.left){
        return root.value
    }else{
       return this.min(root.left)
    }
   }
   max(root=this.root){
    if(!root.right){
        return root.value
    }else{
      return  this.max(root.right)
    }
   }
    

}

const bst = new BinarySearchTree()
console.log(bst.isEmpty());
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(4)
bst.insert(2)
console.log("min : ",bst.min());
console.log("max : ",bst.max());