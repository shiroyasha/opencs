//
// In this exercise, you will create a list, a dynamic data structure that
// can store multiple elements. You will learn how to push elements to the
// list, and how to pop elements from the list.
//
// The list is a dynamic data structure that can store multiple elements. It
// is similar to an array, but it can grow and shrink in size. Compared to arrays,
// which have a fixed size, lists can change their size dynamically. This is
// made possible by the lists' internal structure, which consists of nodes.
//
// A array is fixed size structure continiously laid out in memory:
//
//   Example of an array in memory that stores 3 elements (2, 56, 12):
//
//   ============================================================================
//   |   -   |   2   |   56   |    12   |   -   |   -   |   -   |   -   |   -   |
//   ============================================================================
//               ^        ^        ^
//            niz[0]   niz[1]   niz[2]
//
//
// A list is a dynamic structure that consists of nodes:
//
//  Example of a list in memory that stores 3 elements (2, 56, 12):
//
//                  +-------------------------------------------+
//                  |                                           |
//                  |                  NULL (end)               |
//                  |                   |                       |
//   ===============|===================|=======================v=====================
//   |   -   |   2  *  |   -   |    12  *  |   -   |   -   |   56 *  |   -   |   -   |
//   ================================^============================|==================
//               ^                   |                            |
//               |                   +----------------------------+
//               |                      
//             HEAD  (first element)            
//

class Main {
  public static void main(String[] args) {
    List list = new List();

    // Add elements to the list
    list.push(3);
    list.push(5);
    list.push(7);

    // Print the list
    list.print();

    // Remove the last element from the list
    list.pop();

    // Print the list
    list.print();
  }
}

class List {
  // The first node in the list
  Node head;

  public List() {
    // When the list is created, the head is set to null. Null means that 
    // the "head" does not point to any other node.
    this.head = null;
  }

  public void push(int value) {
    // Create a new node in memory with the given value
    Node newNode = new Node(value);

    if (this.head == null) {
      // If out list is empty, set the new node as the beginning of the list.
      this.head = newNode;

    } else {
      // Otherwise, prepend the new node to the beginning of the list.
      // To do this, the new node will point to the current head of the list.
      // Then, the head of the list will be set to the new node.
      
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  public void pop() {
    if (this.head == null) {
      // If the list is empty, there is nothing to remove.
      System.out.println("The list is empty. You cannot remove an element.");
    } else {
      // If the list is not empty, remove the first element by setting the head
      // to the next element in the list.
      this.head = this.head.next;

      return value;
    }
  }

  public void print() {
    // We will iterate through the list and print each element.
    // We will start from the head of the list and move to the next node until
    // we reach the end of the list (the last node, which points to null).
    Node current = this.head;

    System.out.print("List: ");

    while (current != null) {
      System.out.print(current.value + " -> ");
      current = current.next;
    }

    System.out.println("null");
  }
}

class Node {
  // The value of the node
  int value;

  // The next node in the list
  Node next;

  public Node(int value) {
    this.value = value;
    this.next = null;
  }
}
