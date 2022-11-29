/* 
[10, 7, 12, 11, 9, 2, 1, 15]

              (10)
           /        \
        (7)          (12)
       /    \       /     \
     (1)     (9)   (11)    (15)
            /   
          (8)
 pre-orden VLR ->  value left rigth
 ["10", 7, 1, 9, 8, 12, 11, 15]                    menor <= iqz  || mayor >= der    

 in-orden LVR ->   left value rigth
 [1, 7, 8, 9, "10", 11, 12, 15]

 post-orden LRV ->  left rigth value
 [1, 8, 9, 7, 11, 15, 12, "10"]

*/

function BTS(value) {
    this.root = value
    this.left = null
    this.rigth = null
}

function Node(value) {
    this.root = value
    this.left = null
    this.rigth = null
}
//BTS.prototype.add = function (value) {} for in if recurcion 

const data = [10, 7, 12, 11, 9, 8, 1];
const arbol = new BTS(10)
const node1 = new Node(data[1])
const node2 = new Node(data[2])
const node3 = new Node(data[3])
const node4 = new Node(data[4])
const node5 = new Node(data[5])
const node6 = new Node(data[6])
arbol.left = node1
arbol.rigth = node2
arbol.rigth.left = node3
arbol.left.rigth = node4
arbol.left.rigth.left = node5
arbol.left.left = node6
console.log(arbol)

