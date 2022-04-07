function Solution(A)
{
    let brushCount = 0;
    let prevHeight = 0;
    for(int i = 0; i < A.length; i++)
    {
        if(A[i] > prevHeight) {
             brushCount = brushCount + (A[i] - prevHeight);
        }
        prevHeight = A[i];
    }
    return brushCount;
}
