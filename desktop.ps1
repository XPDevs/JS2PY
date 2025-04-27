Add-Type -TypeDefinition @"
using System;
using System.Runtime.InteropServices;
public class Desktop {
    [DllImport("user32.dll")]
    public static extern int ShowWindow(int hwnd, int nCmdShow);
    [DllImport("user32.dll")]
    public static extern int FindWindow(string lpClassName, string lpWindowName);
}
"@
[Desktop]::ShowWindow([Desktop]::FindWindow("Shell_TrayWnd", ""), 0)