/*
Opposite number

Very simple, given a number, find its opposite (additive inverse).

Examples:
1: -1
14: -14
-34: 34
*/

public class Kata {
  public static int opposite(int number) {
    return number * -1;
  }

  public static void main(String[] args) {
    System.out.println(opposite(1));  
    System.out.println(opposite(14));  
    System.out.println(opposite(-34));  
  }
}
