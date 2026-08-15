#include <iostream>

using namespace std;

void printItems(int val)
{
  for (int i = 0; i < val; i++)
  {
    for (int j = 0; j < val; j++)
    {
      cout << i << j << endl;
    }
  }

  for (int k = 0; k < val; k++)
  {
    cout << k << endl;
  }
}

int main()
{
  cout << "Drop non dominants" << endl;
  printItems(10);
  return 0;
}
