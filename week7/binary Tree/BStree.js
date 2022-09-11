class BStree {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }

  insert(value) {
    if (!this.value) this.value = value;
    else if (value > this.value && !this.right) this.right = new BStree(value);
    else if (value < this.value && !this.left) this.left = new BStree(value);
    else if (value > this.value) this.right.insert(value);
    else this.left.insert(value);
  }

  find(value) {
    if (this.value === value) return true;
    else if (this.left === null && this.right === null) return false;
    else if (this.value > value) return this.left.find(value);
    else if (this.value < value) return this.right.find(value);
  }
  findCommonParent(value1, value2) {
    if (this === null) return null;
    if (this.value > value1 && this.value > value2) {
      return this.left.findCommonParent(value1, value2);
    } else if (this.value < value1 && this.value < value2) {
      return this.right.findCommonParent(value1, value2);
    } else return this.value;
  }
  root = null;
  deleteKey(key) {
    root = deleteRec(root, key);
  }
  deleteRec(root, key) {
    if (root == null) return root;
    if (key < root.key) root.left = deleteRec(root.left, key);
    else if (key > root.key) root.right = deleteRec(root.right, key);
    else {
      if (root.left == null) return root.right;
      else if (root.right == null) return root.left;
      root.key = minValue(root.right);
      root.right = deleteRec(root.right, root.key);
    }

    return root;
  }

  minValue(root) {
    let minv = root.key;
    while (root.left != null) {
      minv = root.left.key;
      root = root.left;
    }
    return minv;
  }
}

// let myTree = new BStree();

// myTree.insert("h");
// myTree.insert("e");
// myTree.insert("s");
// myTree.insert("g");
// myTree.insert("l");
// myTree.insert("y");
// myTree.insert("i");

// ex1
// let r1 = myTree.find("h");
// let r2 = myTree.find("g");
// let r3 = myTree.find("z");
// let r4 = myTree.find("f");
// let r5 = myTree.find("y");

// ex2
let myTree2 = new BStree();
let letters = ["J", "H", "R", "E", "S", "P", "G", "B", "L", "Y", "I"];

for (const item of letters) {
  myTree2.insert(item);
}
// let r1 = myTree2.findCommonParent("B", "I");
// let r2 = myTree2.findCommonParent("B", "G"); //should return "E"8
// let r3 = myTree2.findCommonParent("B", "L"); //should return "J"
// let r4 = myTree2.findCommonParent("L", "Y"); //should return "R"
// let r5 = myTree2.findCommonParent("E", "H"); //should return "J"

//ex3
