Add-Type -TypeDefinition @"
using System;
using System.Runtime.InteropServices;
public class Desktop {
    [DllImport("user32.dll")]
    public static extern int ShowWindow(int hwnd, int nCmdShow);
    [DllImport("user32.dll")]
    public static extern int FindWindow(string lpClassName, string lpWindowName);
    [DllImport("user32.dll")]
    public static extern bool ShowWindowAsync(int hwnd, int nCmdShow);
}
"@

# Find the desktop window (taskbar) and show it
$hwnd = [Desktop]::FindWindow("Shell_TrayWnd", "")
[Desktop]::ShowWindow($hwnd, 0)  # Minimize all windows