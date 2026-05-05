public class Plural {
  public static boolean isPlural(float f) {
    if (f != 1) {
      return true;
    } else {
      return false;
    }
  }

  public static void main(String[] args) {
    System.out.println(isPlural(0.5f));
    System.out.println(isPlural(1f));
    System.out.println(isPlural(6f));
    System.out.println(isPlural(0f));
  }
}
