/*
   _____        ____      ____  __ __                
  /  _  \      |    |    |    |/ _|__| ____    ____  
 /  /_\  \     |    |    |      < |  |/    \  / ___\ 
/    |    \/\__|    |    |    |  \|  |   |  \/ /_/  >
\____|__  /\________|____|____|__ \__|___|  /\___  / 
        \/         /_____/       \/       \//_____/  
* @author AJ170

Made By AJ170 If You Want To Use Any Code Please Ask I Will More Than Likly Let You Contact Me @AJ170_iOS_King (Twitter) or kik.me/AJ170.iPA (KiK)
*/
/*
  ."""   "      ""   ""
  ;      ;       "" ""
  ;  ''  ;        """
   """   '"""    "" ""
                ""   ""
  ________                      __         ____  ___
 /  _____/  ____   ____   ____ |  |   ____ \   \/  /
/   \  ___ /  _ \ /  _ \ / ___\|  | _/ __ \ \     / 
\    \_\  (  <_> |  <_> ) /_/  >  |_\  ___/ /     \ 
 \______  /\____/ \____/\___  /|____/\___  >___/\  \
        \/             /_____/           \/      \_/
		
R.I.P English
*Remake by  @GoogleX
*/

//Widgets
var Button = android.widget.Button;
var LinearLayout = android.widget.LinearLayout;
var RelativeLayout = android.widget.RelativeLayout;
var PopupWindow = android.widget.PopupWindow;
var ScrollView = android.widget.ScrollView;
var TextView = android.widget.TextView;
var CheckBox = android.widget.CheckBox;
var Switch = android.widget.Switch;
var ImageView = android.widget.ImageView;
var EditText = android.widget.EditText;
var CompoundButton = android.widget.CompoundButton;
var SeekBar = android.widget.SeekBar;
var ProgressBar = android.widget.ProgressBar;
var ToggleButton = android.widget.ToggleButton;
var Toast = android.widget.Toast;
var FrameLayout = android.widget.FrameLayout;

//Graphics and View
var Typeface = android.graphics.Typeface;
var Color = android.graphics.Color;
var View = android.view.View;
var ColorDrawable = android.graphics.drawable.ColorDrawable;
var Gravity = android.view.Gravity;
var BitmapFactory = android.graphics.BitmapFactory;
var ViewGroup = android.view.ViewGroup;
var GradientDrawable = android.graphics.drawable.GradientDrawable;
var Bitmap = android.graphics.Bitmap;
var Canvas = android.graphics.Canvas;
var Paint = android.graphics.Paint;
var Path = android.graphics.Path;
var LinearGradient = android.graphics.LinearGradient;
var Shader = android.graphics.Shader;
var MotionEvent = android.view.MotionEvent;
var PorterDuff = android.graphics.PorterDuff;
var BitmapDrawable = android.graphics.drawable.BitmapDrawable;
var StateListDrawable = android.graphics.drawable.StateListDrawable;
var ViewTreeObserver = android.view.ViewTreeObserver;
var TranslateAnimation = android.view.animation.TranslateAnimation;
var Animation = android.view.animation.Animation;
var ClipDrawable = android.graphics.drawable.ClipDrawable;
var LightingColorFilter = android.graphics.LightingColorFilter;
var WindowManager = android.view.WindowManager;

//Other
var Environment = android.os.Environment;
var File = java.io.File;
var FileOutputStream = java.io.FileOutputStream;
var Runnable = java.lang.Runnable;
var Base64 = android.util.Base64;

var AlertDialog = {
    Builder: function() {
        return android.app.AlertDialog.Builder;
    }
}

var DialogInterface = android.content.DialogInterface;
var DataOutputStream = java.io.DataOutputStream;
var BufferedReader = java.io.BufferedReader;
var Thread = java.lang.Thread;
var TypedValue = android.util.TypedValue;
var Byte = java.lang.Byte;
var Context = android.content.Context;
var Handler = android.os.Handler;
var TextWatcher = android.text.TextWatcher;
var FileWriter = java.io.FileWriter;
var InputStreamReader = java.io.InputStreamReader;
var SpannableStringBuilder = android.text.SpannableStringBuilder;
var ImageSpan = android.text.style.ImageSpan;
var Spannable = android.text.Spannable;
var StringBuffer = java.lang.StringBuffer;
var Html = android.text.Html;
var ZipFile = java.util.zip.ZipFile;
var ByteBuffer = java.nio.ByteBuffer;
var MediaPlayer = android.media.MediaPlayer;
var String = java.lang.String;
var StringBuilder = java.lang.StringBuilder;
var printWriter = java.io.printWriter;

//Web
var URL = java.net.URL;
var Uri = android.net.Uri;
var WebView = android.webkit.WebView;
var MalformedURLException = java.net.MalformedURLException;

//BlockLauncher and Mozilla JavaScript
var ScriptManager = net.zhuoweizhang.mcpelauncher.ScriptManager;
var Utils = net.zhuoweizhang.mcpelauncher.Utils;
var PatchManager = net.zhuoweizhang.mcpelauncher.PatchManager;
var ScriptableObject = org.mozilla.javascript.ScriptableObject;

var cx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
var metrics = cx.getResources().getDisplayMetrics();
var dp = metrics.density;
var buttonX=5*dp,buttonY=5*dp;
var pressed = false;
var mX = null, mY = null;
var greenPos = 0;
var homeX = 0, homeY = 0, homeZ = 0;
var teleports = [];
var h = 0;
var btn;
var botton = false;
var botton1 = false;
var openwindow = null;
var openwindow1 = null;
var blood;
var pointent = -1;
var time = -1;

function runOnUiThread(func) {
	ctx.runOnUiThread(new Runnable({
		run: function() {
			try {
				func(ctx);
			}catch(err) {
				print("e/ " + err + " #" + err.lineNumber);
			}
		}
	}));
};

function CNameOpen() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
CustomN = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var Name = new android.widget.EditText(ctx);
var CNDialog = new android.app.Dialog(ctx);
var xit = new android.widget.Button(ctx);

CNDialog.setTitle("Input Name");
CNDialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
CNDialog.show();
Layer.addView(Name);
Layer.addView(xit);

Name.setHint("Enter Name");
xit.setText("Done");

xit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
dup = Name.getText().toString();
CNDialog.dismiss();
STOpen();

}
});

CustomN.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
CustomN.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
CustomN.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("Error :(:"+e)
}
}});
}

function Info2() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
Log = new android.widget.PopupWindow();
var toplayer = new android.widget.LinearLayout(ctx);
var Layer = new android.widget.LinearLayout(ctx);
var scroller = new android.widget.ScrollView(ctx);
var third = new android.widget.TextView(ctx);
var second = new android.widget.TextView(ctx);
var first = new android.widget.TextView(ctx);
var Dialogy = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialogy.setTitle("Daftar Lagu:");
Dialogy.setContentView(toplayer);

scroller.addView(Layer);
toplayer.addView(scroller);

toplayer.setOrientation(android.widget.LinearLayout.HORIZONTAL);
Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialogy.show();
Layer.addView(third);
Layer.addView(second);
Layer.addView(first);
Layer.addView(Exit);

third.setText("List of Music: \nColdplay - Hymn For The Weekend \nColdplay - Viva La Vida \nDillon Francis, DJ Snake - Get Low \nMAGIC! - Lay You Down Easy ft. Sean Paul \nSKRILLEX - Bangarang feat. Sirah \nSkrillex and Diplo -Where Are U Now- \nBro Safari - Scumbag \nSKisM - Experts (Original Mix) \nHardwell - Spaceman \nFor Elise - Ludwig van Beethoven \nSkrillex - Make It Bun Dem");
second.setText("\nLagu yang lama telah saya ganti menjadi yang baru ^-^");
first.setText("\n\nMau lebih banyak ? Gampang anda tinggal req saja ke saya lewat kontak dibawah ini ! \nFacebook: http://www.fb.me/m.rakha.f \nE-Mail: zozbangz@gmail.com \n\nJangan lupa untuk support developers yang asli ya ^-^ ! \nThx to AJ170 & All");
Exit.setText("Ok");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
Dialogy.dismiss();
}
});

Log.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
Log.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
Log.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("AJMODS MCPE FOUND A ERROR "+e)
}
}});
}

//ChangeLog (GLX)
function changeLog() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
Log = new android.widget.PopupWindow();
var toplayer = new android.widget.LinearLayout(ctx);
var Layer = new android.widget.LinearLayout(ctx);
var scroller = new android.widget.ScrollView(ctx);
var third = new android.widget.TextView(ctx);
var second = new android.widget.TextView(ctx);
var another1 = new android.widget.TextView(ctx);
var another2 = new android.widget.TextView(ctx);
var another3 = new android.widget.TextView(ctx);
var another4 = new android.widget.TextView(ctx);
var first = new android.widget.TextView(ctx);
var Dialogy = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialogy.setTitle("Change Log");
Dialogy.setContentView(toplayer);

scroller.addView(Layer);
toplayer.addView(scroller);

third.setText("1.2 Stable \n+Translate to Indonesian \n+Changed Track List \n+Added New Menu (YT GLX) \n+Changed AutoUpdate \n+And More");
second.setText("\n\n1.3 Stable \n+Added New Menu (ChangeLog) \n+Added Music Dialog \n+And More");
another1.setText("\n\n1.4 Dev \n=Bug Fixed \nSorry For The Bug ^-^");
another2.setText("\n\n1.5 Stable \n=Bug Fixed (Loop)");
another3.setText("\n\n1.6 Stable \n=Much Bug Is Fixed \n+Changed More Image \n+And More");
another4.setText("\n\n1.7 Stable \n=Our Music Dialog Is Fixed (Not at all) \n+Changed Text Color In Menu");
another5.setText("\n\n1.8 Stable \n=Bug Fixed \n+Now support 0.15.X");
first.setText("\n\nBug ? Message To Me ! \nFacebook: http://www.fb.me/m.rakha.f \nE-Mail: zozbangz@gmail.com \n\nJangan lupa untuk support developers yang asli ya ^-^ ! \nThx to AJ170 & All");
Exit.setText("Ok");

toplayer.setOrientation(android.widget.LinearLayout.HORIZONTAL);
Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialogy.show();
Layer.addView(third);
Layer.addView(second);
Layer.addView(another1);
Layer.addView(another2);
Layer.addView(another3);
Layer.addView(another4);
Layer.addView(another5);
Layer.addView(first);
Layer.addView(Exit);

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
Dialogy.dismiss();
}
});

Log.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
Log.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
Log.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("AJMODS MCPE FOUND A ERROR "+e)
}
}});
}

function Info() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
Log = new android.widget.PopupWindow();
var toplayer = new android.widget.LinearLayout(ctx);
var Layer = new android.widget.LinearLayout(ctx);
var scroller = new android.widget.ScrollView(ctx);
var third = new android.widget.TextView(ctx);
var second = new android.widget.TextView(ctx);
var buggy = new android.widget.TextView(ctx);
var support = new android.widget.TextView(ctx);
var Dialogy = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialogy.setTitle("Info Penting:");
Dialogy.setContentView(toplayer);

scroller.addView(Layer);
toplayer.addView(scroller);

toplayer.setOrientation(android.widget.LinearLayout.HORIZONTAL);
Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialogy.show();
Layer.addView(third);
Layer.addView(second);
Layer.addView(buggy);
Layer.addView(support);
Layer.addView(Exit);

buggy.setTextSize(20);

third.setText("Tekan Dan Tahan Tombol Menu Untuk Memindahkan!");
second.setText("\nJika Indikator Darah Tidak Ada Gambar, Mohon Reload BlockLauncher!");
buggy.setText("\nBugs:");
support.setText("Sometimes You Cant Hit Dismiss \nBefore Turning Off Sniper/Lantern You Have To Select A Diffrent Item \n XYZ Teleporter Is Broken\nUnknown Bug(Pls. Report It)\n\n\n@AJ170_iOS_King\nYouTube AJ170 \nKiK AJ170.iPA \n(Links At The Bottom Of The Main Menu)");
Exit.setText("Tutup");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
Dialogy.dismiss();
}
});

Log.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
Log.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
Log.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("AJMODS MCPE FOUND A ERROR "+e)
}
}});
}
function (){
						spamMessage = spamMessageInput.getText();}
function STOpen() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
Custom = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var conti = new android.widget.Button(ctx);
var STDialog = new android.app.Dialog(ctx);
var xit = new android.widget.Button(ctx);

STDialog.setTitle("Enter Time");
STDialog.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
STDialog.show();
Layer.addView(conti);
Layer.addView(xit);

conti.setText("Continues Naming");
xit.setText("Once Naming");

conti.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
STDialog.dismiss();
setName = 2;
cntr = 1;
}
});

xit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
STDialog.dismiss();
setName = 1;
}
});

Custom.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
Custom.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
Custom.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Time Dialog Is Malfunctioning:"+e)
}
}});
}

function SaveTeleports() {
try {
var path = android.os.Environment.getExternalStorageDirectory().getPath() + "/games/com.mojang/minecraftworlds/" + Level.getWorldDir() + "/";

var newFile = new java.io.File(path, "aj_teleports.dat");
newFile.createNewFile();

var outWrite=new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
var k = 0;

for(var j = 0; j<objectLength(teleports); j++){
if(!teleports[j].removed){
outWrite.append(teleports[j].name + "@" + teleports[j].x + "@" + teleports[j].y + "@" + teleports[j].z);
k = j+1;
break;
}
}

for(var j = k; j<objectLength(teleports); j++) {
if(!teleports[j].removed)
outWrite.append("\n" + teleports[j].name + "@" + teleports[j].x + "@" + teleports[j].y + "@" + teleports[j].z);
}

outWrite.close();
}catch(err) {
print(err);
print(err);
print(err);
}
}

function LoadTeleports() {
var savefile="";
var path=android.os.Environment.getExternalStorageDirectory().getPath() + "/games/com.mojang/minecraftworlds/" + Level.getWorldDir() + "/";
if(!java.io.File(path + "aj_teleports.dat").exists())
return;

if(java.io.File(path + "aj_teleports.dat").exists()) {
var file=new java.io.File(path + "aj_teleports.dat");
var fos=new java.io.FileInputStream(file);
var str=new java.lang.StringBuilder();
var ch;
while((ch=fos.read())!=-1)
str.append(java.lang.Character(ch));

savefile = String(str.toString());
if(savefile.length>4) {
if(savefile.split("\n")[0].split("@").length == 3) {
var sf=savefile;
savefile="";

for(var i = 0; i<sf.split("\n").length; i++)
savefile+=sf.split("\n")[i].split("@")[0]+"@"+sf.split("\n")[i].split("@")[1]+"@"+0+"@"+sf.split("\n")[i].split("@")[2]+"\n";

savefile = savefile.substring(0, savefile.length-2);
}

for(var i = 0; i<savefile.split("\n").length;i++){
if(i != 0 && savefile.split("\n")[i].split("@")[0] != "lastDeath")
teleports[objectLength(teleports)] = {name:savefile.split("\n")[i].split("@")[0],x:parseInt(savefile.split("\n")[i].split("@")[1]),y:parseInt(savefile.split("\n")[i].split("@")[2]),z:parseInt(savefile.split("\n")[i].split("@")[3]), removed:false};
}
}

fos.close();
}
}


/* WIP
function SaveHome() {
var worldPath = android.os.Environment.getExternalStorageDirectory().getPath() + "/games/com.mojang/minecraftWorlds/" + Level.getWorldDir() + "/";

var newFile = new java.io.File(worldPath, "switch_home.dat");
newFile.createNewFile();
var outWrite = new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
outWrite.append("X:" + homeX.toString() + "\n");
outWrite.append("Y:" + homeY.toString() + "\n");
outWrite.append("Z:" + homeZ.toString());

outWrite.close();
}

function LoadHome() {
var worldPath = android.os.Environment.getExternalStorageDirectory().getPath() + "/games/com.mojang/minecraftWorlds/" + Level.getWorldDir() + "/";

if(!java.io.File(worldPath + "switch_home.dat").exists())
return;
var file=new java.io.File(worldPath + "switch_home.dat");
var fos=new java.io.FileInputStream(file);
var str=new java.lang.StringBuilder();
var ch;

while((ch=fos.read())!=-1)
str.append(java.lang.Character(ch));
if(str.toString().split("\n")[0].split(":")[1] != "0")
homeX = str.toString().split("\n")[0].split(":")[1];

if(str.toString().split("\n")[1].split(":")[1] != "0")
homeY = str.toString().split("\n")[1].split(":")[1];

if(str.toString().split("\n")[2].split(":")[2] != "0")
homeZ = str.toString().split("\n")[2].split(":")[2];
fos.close();

}
*/

function initTeleportDialog() {
runOnUiThread(function(ctx) {
try {

var layout = new LinearLayout(ctx);

var scroll = new ScrollView(ctx);
layout.setOrientation(1);
scroll.addView(layout);

var teleportD = new android.app.AlertDialog.Builder(ctx);
teleportD.setTitle("Teleport");
teleportD.setInverseBackgroundForced(true);
teleportD.setView(scroll);

for(var i = 0;i<objectLength(teleports);i++) {
if(!teleports[i].removed) {
if(CreateButton(i).getParent()!=null)
CreateButton(i).getParent().removeView(CreateButton(i));
layout.addView(CreateButton(i));
}
}

teleportD.setPositiveButton("Tambah Lokasi", new android.content.DialogInterface.OnClickListener() {
onClick: function(dialog, which) {
AddNewTeleport(parseInt(Player.getX()), parseInt(Player.getY()), parseInt(Player.getZ()));
}});

teleportD.setNegativeButton("Tutup", new android.content.DialogInterface.OnClickListener() {
onClick: function(dialog, which) {
}});

teleportD.create().show();

}catch(err) {
print(err);
print(err);
print(err);
}});
}

function objectLength(obj) {
var x = 0;
for(var i in obj)
x++;
return x;
}

function AddNewTeleport(cx, cy, cz) {
runOnUiThread(function(ctx) {
var alert = new android.app.AlertDialog.Builder(ctx);
alert.setCancelable(false);
alert.setMessage("Tambah Lokasi");
userInput = new EditText(ctx);
userInput.setText("Nama Teleportasi");
alert.setView(userInput);
alert.setPositiveButton("Tambahkan", new android.content.DialogInterface.OnClickListener() {
onClick: function(dialog, which) {
Coordinates(userInput.getText(), cx, cy, cz);
}
});

alert.setNegativeButton("Tutup", new android.content.DialogInterface.OnClickListener(){
onClick: function(dialog,whichButton) {
}});

alert.create().show();

});
}

function Coordinates(name, cx, cy, cz) {
runOnUiThread(function(ctx) {
var alert=new android.app.AlertDialog.Builder(ctx);
alert.setTitle("Masukan Koordinat Lokasi");
userInput = new android.widget.EditText(ctx);
userInput.setText(cx + "," + cy +"," + cz);
alert.setView(userInput);
alert.setPositiveButton("OK", new android.content.DialogInterface.OnClickListener(){
onClick: function(dialog,whichButton){
try{
if(String(userInput.getText()).split(",").length == 3) {
teleports[objectLength(teleports)] = {name:name,x:parseInt(String(userInput.getText()).split(",")[0]),y:parseInt(String(userInput.getText()).split(",")[1]),z:parseInt(String(userInput.getText()).split(",")[2]),removed:false};
SaveTeleports();
}else
Warning(Coordinates(name, cx, cz), "Error", "Masukan seperti contoh. Contoh" + ": " + cx + "," + cy + "," + cz);
}catch(err) {
clientMessage(err);
}
}});
alert.setNegativeButton("Tutup", new android.content.DialogInterface.OnClickListener() {
onClick: function(dialog, which) {
}});
alert.create().show();

});
}

function Warning(funct, title, msg) {
runOnUiThread(function(ctx) {
try{
var alert=new android.app.AlertDialog.Builder(ctx);
alert.setTitle(title);
alert.setMessage(msg);
alert.setPositiveButton("OK", new android.content.DialogInterface.OnClickListener() {
onClick: function(dialog, which) {
}});
alert.show();

}catch(err) {
clientMessage(err);
}

});
}

function CreateButton(i) {
try {
var slayout = new LinearLayout(ctx);
slayout.setOrientation(android.widget.LinearLayout.HORIZONTAL);

var btn = new android.widget.Button(ctx)
btn.setText(teleports[i].name);
btn.setOnClickListener(new android.view.View.OnClickListener({
onClick: function(viewarg) {
Entity.setPosition(Player.getEntity(), teleports[i].x, teleports[i].y, teleports[i].z);
}
}));

var btn2 = new android.widget.Button(ctx);
btn2.setText("Hapus");
btn2.setOnClickListener(new android.view.View.OnClickListener({
onClick: function(viewarg) {
RemoveTeleport(i);
}
}));

if(btn.getParent()!=null)
btn.getParent().removeView(btn);
slayout.addView(btn);

if(btn2.getParent()!=null)
btn2.getParent().removeView(btn2);
slayout.addView(btn2);

}catch(err) {
clientMessage(err);
}

return slayout;
}

function RemoveTeleport(i) {
runOnUiThread(function(ctx) {
var alert=new android.app.AlertDialog.Builder(ctx);
alert.setTitle("Kau serius?");
alert.setPositiveButton("Ya", new android.content.DialogInterface.OnClickListener() {
onClick: function(dialog, which) {
teleports[i].removed = true;
SaveTeleports();
initTeleportDialog();
}});

alert.setNegativeButton("Jangan", new android.content.DialogInterface.OnClickListener(){
onClick: function(dialog, which) {
}});

alert.create().show();

});
}

var mp;

var music = [
	["Skrillex and Diplo - -Where Are U Now- with Justin Bieber (Official Video)", "https://www.dropbox.com/s/6m7jozzb0qi64g0/Skrillex%20and%20Diplo%20-%20-Where%20Are%20%C3%83%C2%9C%20Now-%20with%20Justin%20Bieber%20%28Official%20Video%29.mp3?dl=1"],
	["SKRILLEX - Bangarang feat. Sirah [Official Music Video]", "https://www.dropbox.com/s/6l514y7xctostjn/SKRILLEX%20-%20Bangarang%20feat.%20Sirah%20%5BOfficial%20Music%20Video%5D.mp3?dl=1"],
	["Dillon Francis, DJ Snake - Get Low", "https://www.dropbox.com/s/rxzvfl25mwq7m60/Dillon%20Francis%2C%20DJ%20Snake%20-%20Get%20Low.mp3?dl=1"],
	["Coldplay - Hymn For The Weekend (Official video)", "https://www.dropbox.com/s/96u3cuk0itsc719/Coldplay%20-%20Hymn%20For%20The%20Weekend%20%28Official%20video%29.mp3?dl=1"],
	["Coldplay - Viva La Vida", "https://www.dropbox.com/s/0bfzbv9lx91juhv/Coldplay%20-%20Viva%20La%20Vida.mp3?dl=1"],
	["MAGIC! - Lay You Down Easy (Studio Version) ft. Sean Paul", "https://www.dropbox.com/s/wicv77tf7r2pbpw/MAGIC%21%20-%20Lay%20You%20Down%20Easy%20%28Studio%20Version%29%20ft.%20Sean%20Paul.mp3?dl=1"],
	["For Elise - Ludwig van Beethoven", "https://www.dropbox.com/s/ibv8tc1nkkqixab/For%20Elise%20-%20Ludwig%20van%20Beethoven.mp3?dl=1"],
	["Hardwell - Spaceman (Carnage Festival Trap Remix)", "https://www.dropbox.com/s/fgmd73ndfs9o4km/Hardwell%20-%20Spaceman%20%28Carnage%20Festival%20Trap%20Remix%29.mp3?dl=1"],
    ["SKisM - Experts (Original Mix)", "https://www.dropbox.com/s/f3tizc90nqdtcge/SKisM%20-%20Experts%20%28Original%20Mix%29.mp3?dl=1"],
	["Bro Safari - Scumbag", "https://www.dropbox.com/s/i22peqbfx2mcr1o/Bro%20Safari%20-%20Scumbag.mp3?dl=1"],
	["Skrillex & Damian -Jr. Gong- Marley - Make It Bun Dem", "https://www.dropbox.com/s/kx941l6e4lrwrtw/Skrillex%20%26%20Damian%20-Jr.%20Gong-%20Marley%20-%20Make%20It%20Bun%20Dem.mp3?dl=1"]
];

function playMusic() {
	if(autoMusicSetting == "on" && music.length != 0) {
		try {
			var randomMusic = music[Math.floor(Math.random() * music.length)];
			mp = new android.media.MediaPlayer();
			mp.setDataSource(randomMusic[1]);
			mp.setOnPreparedListener(new android.media.MediaPlayer.OnPreparedListener() {
				onPrepared: function(mp) {
					musicText = randomMusic[0];
					
					mp.start();
				}
			});
			mp.setOnCompletionListener(new android.media.MediaPlayer.OnCompletionListener() {
				onCompletion: function(arg0) {
					mp = null;
					music.slice(randomMusic);
					eval(playMusic());
				}
			});
			mp.prepareAsync();
		} catch(e) {
			print(e);
		}
	} else {
		musicText = "None";
		
	}
}




function color5(){
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{

var hackBtn5 = android.widget.TextView(ctx);

var blackBtn5 = android.widget.Button(ctx);
blackBtn5.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

var whiteBtn5 = android.widget.Button(ctx);
whiteBtn5.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

var pinkBtn5 = android.widget.Button(ctx);
pinkBtn5.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

var redBtn5 = android.widget.Button(ctx);
redBtn5.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

var blueBtn5 = android.widget.Button(ctx);
blueBtn5.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));


var mepBtn5 = android.widget.Button(ctx);
mepBtn5.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));


var tranBtn5 = android.widget.Button(ctx);
tranBtn5.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

var cBtn5 = android.widget.Button(ctx);
cBtn5.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
cBtn5.setTextColor(android.graphics.Color.BLACK);
hackBtn5.setText("Select Button Color");
hackBtn5.setTextSize(15);
hackBtn5.setTextColor(android.graphics.Color.BLACK);

var tmiLayout = new android.widget.LinearLayout(ctx);
tmiLayout.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.GREEN));
var tmiLayout1 = new android.widget.LinearLayout(ctx);
tmiLayout1.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.GREEN));
var tmiScroll = android.widget.ScrollView(ctx);
tmiScroll.addView(tmiLayout);
tmiLayout1.setOrientation(android.widget.LinearLayout.VERTICAL);
tmiLayout1.addView(tmiScroll);
 
 
var tmiDialog = new android.app.Dialog(ctx);
tmiDialog.setContentView(tmiLayout1);
tmiDialog.setTitle("Button colors");
tmiLayout.setGravity(android.view.Gravity.CENTER);

blackBtn5.setText("Blue");

whiteBtn5.setText("Green");

pinkBtn5.setText("Red");

redBtn5.setText("Yellow");

blueBtn5.setText("White");

mepBtn5.setText("Black");

tranBtn5.setText("Transparent");

cBtn5.setText("Close");


tmiDialog.show();
tmiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
//tmiLayout1.setPadding(25);
tmiLayout.addView(hackBtn5);
tmiLayout.addView(blackBtn5);
tmiLayout.addView(whiteBtn5);
tmiLayout.addView(pinkBtn5);
tmiLayout.addView(redBtn5);
tmiLayout.addView(blueBtn5);
tmiLayout.addView(mepBtn5);
tmiLayout.addView(tranBtn5);
tmiLayout.addView(cBtn5);

blackBtn5.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(viewarg){


Backmenu.dismiss();
BackMenu();
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
mbd12();
BUTcurr2 = BUTblue2
mb12();
             

}});


 whiteBtn5.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(viewarg){


Backmenu.dismiss();
BackMenu();
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
mbd12();
BUTcurr2 = BUTgreen2
mb12();


}});


pinkBtn5.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(viewarg){


Backmenu.dismiss();
BackMenu();
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
mbd12();
BUTcurr2 = BUTred2
mb12();

 
}});


redBtn5.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(viewarg){


Backmenu.dismiss();
BackMenu();
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
mbd12();
BUTcurr2 = BUTyellow2
mb12();

 
}});


blueBtn5.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(viewarg){


Backmenu.dismiss();
BackMenu();
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
mbd12();
BUTcurr2 = BUTwhite2
mb12();

 
}});

mepBtn5.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(viewarg){


Backmenu.dismiss();
BackMenu();
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
mbd12();
BUTcurr2 = BUTblack2
mb12();

 
}});


tranBtn5.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(viewarg){


Backmenu.dismiss();
BackMenu();
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
mbd12();
BUTcurr2 = BUTtran2
mb12();

 
}});


cBtn5.setOnClickListener(new  android.view.View.OnClickListener(){

onClick: function(viewarg){
           tmiDialog.dismiss();
}});






} catch(errr) {
print(errr);
}
}}));
}



function color3(){
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{

var hackBtn4 = android.widget.TextView(ctx);

var blackBtn4 = android.widget.Button(ctx);
blackBtn4.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

var whiteBtn4 = android.widget.Button(ctx);
whiteBtn4.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

var pinkBtn4 = android.widget.Button(ctx);
pinkBtn4.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

var redBtn4 = android.widget.Button(ctx);
redBtn4.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

var blueBtn4 = android.widget.Button(ctx);
blueBtn4.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));


var mepBtn3 = android.widget.Button(ctx);
mepBtn3.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));


var cBtn4 = android.widget.Button(ctx);
cBtn4.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
cBtn4.setTextColor(android.graphics.Color.BLACK);
hackBtn4.setText("Select Button Text Color");
hackBtn4.setTextSize(15);
hackBtn4.setTextColor(android.graphics.Color.BLACK);

var tmiLayout = new android.widget.LinearLayout(ctx);
tmiLayout.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.GREEN));
var tmiLayout1 = new android.widget.LinearLayout(ctx);
tmiLayout1.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.GREEN));
var tmiScroll = android.widget.ScrollView(ctx);
tmiScroll.addView(tmiLayout);
tmiLayout1.setOrientation(android.widget.LinearLayout.VERTICAL);
tmiLayout1.addView(tmiScroll);
 
 
var tmiDialog = new android.app.Dialog(ctx);
tmiDialog.setContentView(tmiLayout1);
tmiDialog.setTitle("Text Colors");
tmiLayout.setGravity(android.view.Gravity.CENTER);

blackBtn4.setText("Blue");

whiteBtn4.setText("Green");

pinkBtn4.setText("Red");

redBtn4.setText("Yellow");

blueBtn4.setText("White");

mepBtn3.setText("Black");

cBtn4.setText("Close");


tmiDialog.show();
tmiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
//tmiLayout1.setPadding(25);
tmiLayout.addView(hackBtn4);
tmiLayout.addView(blackBtn4);
tmiLayout.addView(whiteBtn4);
tmiLayout.addView(pinkBtn4);
tmiLayout.addView(redBtn4);
tmiLayout.addView(blueBtn4);
tmiLayout.addView(mepBtn3);
tmiLayout.addView(cBtn4);

blackBtn4.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(viewarg){


Backmenu.dismiss();
BackMenu();
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
mbd12();
BUTcurr = BUTblue
mb12();
             

}});


 whiteBtn4.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(viewarg){


Backmenu.dismiss();
BackMenu();
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
mbd12();
BUTcurr = BUTgreen
mb12();


}});


pinkBtn4.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(viewarg){


Backmenu.dismiss();
BackMenu();
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
mbd12();
BUTcurr = BUTred
mb12();

 
}});


redBtn4.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(viewarg){


Backmenu.dismiss();
BackMenu();
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
mbd12();
BUTcurr = BUTyellow
mb12();

 
}});


blueBtn4.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(viewarg){


Backmenu.dismiss();
BackMenu();
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
mbd12();
BUTcurr = BUTwhite
mb12();

 
}});

mepBtn3.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(viewarg){


Backmenu.dismiss();
BackMenu();
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
mbd12();
BUTcurr = BUTblack
mb12();

 
}});


cBtn4.setOnClickListener(new  android.view.View.OnClickListener(){

onClick: function(viewarg){
           tmiDialog.dismiss();
}});






} catch(errr) {
print(errr);
}
}}));
}


function color4(){
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{

var hackBtn3 = android.widget.TextView(ctx);

var blackBtn3 = android.widget.Button(ctx);
blackBtn3.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

var whiteBtn3 = android.widget.Button(ctx);
whiteBtn3.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

var pinkBtn3 = android.widget.Button(ctx);
pinkBtn3.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

var redBtn3 = android.widget.Button(ctx);
redBtn3.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

var blueBtn3 = android.widget.Button(ctx);
blueBtn3.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));




var cBtn3 = android.widget.Button(ctx);
cBtn3.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
cBtn3.setTextColor(android.graphics.Color.BLACK);
hackBtn3.setText("Select Button Size");
hackBtn3.setTextSize(15);
hackBtn3.setTextColor(android.graphics.Color.BLACK);

var tmiLayout = new android.widget.LinearLayout(ctx);
tmiLayout.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.GREEN));
var tmiLayout1 = new android.widget.LinearLayout(ctx);
tmiLayout1.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.GREEN));
var tmiScroll = android.widget.ScrollView(ctx);
tmiScroll.addView(tmiLayout);
tmiLayout1.setOrientation(android.widget.LinearLayout.VERTICAL);
tmiLayout1.addView(tmiScroll);
 
 
var tmiDialog = new android.app.Dialog(ctx);
tmiDialog.setContentView(tmiLayout1);
tmiDialog.setTitle("Button Sizes");
tmiLayout.setGravity(android.view.Gravity.CENTER);

blackBtn3.setText("Extra Small");

whiteBtn3.setText("Small");

pinkBtn3.setText("Normal");

redBtn3.setText("Large");

blueBtn3.setText("Extra Large");


cBtn3.setText("Close");


tmiDialog.show();
tmiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
//tmiLayout1.setPadding(25);
tmiLayout.addView(hackBtn3);
tmiLayout.addView(blackBtn3);
tmiLayout.addView(whiteBtn3);
tmiLayout.addView(pinkBtn3);
tmiLayout.addView(redBtn3);
tmiLayout.addView(blueBtn3);
tmiLayout.addView(cBtn3);

blackBtn3.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(viewarg){


Backmenu.dismiss();
BackMenu();
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
mbd12();
BUTsize = BUTsize1
mb12();
             

}});


 whiteBtn3.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(viewarg){


Backmenu.dismiss();
BackMenu();
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
mbd12();
BUTsize = BUTsize2
mb12();


}});


pinkBtn3.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(viewarg){


Backmenu.dismiss();
BackMenu();
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
mbd12();
BUTsize = BUTsize3
mb12();

 
}});


redBtn3.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(viewarg){


Backmenu.dismiss();
BackMenu();
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
mbd12();
BUTsize = BUTsize5
mb12();

 
}});


blueBtn3.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(viewarg){


Backmenu.dismiss();
BackMenu();
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
mbd12();
BUTsize = BUTsize6
mb12();

 
}});


cBtn3.setOnClickListener(new  android.view.View.OnClickListener(){

onClick: function(viewarg){
           tmiDialog.dismiss();
}});






} catch(errr) {
print(errr);
}
}}));
}


function color2(){
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{

var hackBtn2 = android.widget.TextView(ctx);

var blackBtn2 = android.widget.Button(ctx);
blackBtn2.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

var whiteBtn2 = android.widget.Button(ctx);
whiteBtn2.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

var pinkBtn2 = android.widget.Button(ctx);
pinkBtn2.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

var redBtn2 = android.widget.Button(ctx);
redBtn2.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

var blueBtn2 = android.widget.Button(ctx);
blueBtn2.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));


var ltgrayBtn2 = android.widget.Button(ctx);
ltgrayBtn2.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));


var grayBtn2 = android.widget.Button(ctx);
grayBtn2.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));


var drkgrayBtn2 = android.widget.Button(ctx);
drkgrayBtn2.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));


var ylwBtn2 = android.widget.Button(ctx);
ylwBtn2.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));


var cyanBtn2 = android.widget.Button(ctx);
cyanBtn2.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));


var grnBtn2 = android.widget.Button(ctx);
grnBtn2.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));


var cBtn2 = android.widget.Button(ctx);
cBtn2.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
cBtn2.setTextColor(android.graphics.Color.BLACK);
hackBtn2.setText("Solid Colors");
hackBtn2.setTextSize(15);
hackBtn2.setTextColor(android.graphics.Color.BLACK);

var tmiLayout = new android.widget.LinearLayout(ctx);
tmiLayout.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.GREEN));
var tmiLayout1 = new android.widget.LinearLayout(ctx);
tmiLayout1.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.GREEN));
var tmiScroll = android.widget.ScrollView(ctx);
tmiScroll.addView(tmiLayout);
tmiLayout1.setOrientation(android.widget.LinearLayout.VERTICAL);
tmiLayout1.addView(tmiScroll);
 
 
var tmiDialog = new android.app.Dialog(ctx);
tmiDialog.setContentView(tmiLayout1);
tmiDialog.setTitle("Color Menu 2");
tmiLayout.setGravity(android.view.Gravity.CENTER);
blackBtn2.setText("Black");

whiteBtn2.setText("White");

pinkBtn2.setText("Magenta");

redBtn2.setText("Red");

blueBtn2.setText("Blue");

ltgrayBtn2.setText("Light Gray");

grayBtn2.setText("Gray");

drkgrayBtn2.setText("Dark Gray");

ylwBtn2.setText("Yellow");

cyanBtn2.setText("Cyan");

grnBtn2.setText("Green");


cBtn2.setText("Close");


tmiDialog.show();
tmiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
//tmiLayout1.setPadding(25);
tmiLayout.addView(hackBtn2);
tmiLayout.addView(blackBtn2);
tmiLayout.addView(whiteBtn2);
tmiLayout.addView(pinkBtn2);
tmiLayout.addView(redBtn2);
tmiLayout.addView(blueBtn2);
tmiLayout.addView(ltgrayBtn2);
tmiLayout.addView(grayBtn2);
tmiLayout.addView(drkgrayBtn2);
tmiLayout.addView(ylwBtn2);
tmiLayout.addView(cyanBtn2);
tmiLayout.addView(grnBtn2);

tmiLayout.addView(cBtn2);

blackBtn2.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(viewarg){


Backmenu.dismiss();
GUIColor = GUIColor25
BackMenu();
currentColour = "black";
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
mbd12();
mb12();
             

}});


 whiteBtn2.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(viewarg){


Backmenu.dismiss();
GUIColor = GUIColor24
currentColour = "white";
BackMenu();
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
mbd12();
mb12();


}});


pinkBtn2.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(viewarg){


Backmenu.dismiss();
GUIColor = GUIColor22
BackMenu();
currentColour = "pink";
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
mbd12();
mb12();

 
}});


redBtn2.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(viewarg){


Backmenu.dismiss();
GUIColor = GUIColor23
BackMenu();
currentColour = "red";
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
mbd12();
mb12();

 
}});


blueBtn2.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(viewarg){


Backmenu.dismiss();
GUIColor = GUIColor21
BackMenu();
currentColour = "blue";
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
mbd12();
mb12();

 
}});


ltgrayBtn2.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(viewarg){


Backmenu.dismiss();
GUIColor = GUIColor16
BackMenu();
currentColour = "Light Gray";
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
mbd12();
mb12();

 
}});


grayBtn2.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(viewarg){


Backmenu.dismiss();
GUIColor = GUIColor17
BackMenu();
currentColour = "Gray";
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
mbd12();
mb12();

 
}});


drkgrayBtn2.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(viewarg){


Backmenu.dismiss();
GUIColor = GUIColor18
BackMenu();
currentColour = "Dark Gray";
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
mbd12();
mb12();

 
}});


ylwBtn2.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(viewarg){


Backmenu.dismiss();
GUIColor = GUIColor20
BackMenu();
currentColour = "yellow";
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
mbd12();
mb12();

 
}});


cyanBtn2.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(viewarg){


Backmenu.dismiss();
GUIColor = GUIColor19
BackMenu();
currentColour = "cyan";
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
mbd12();
mb12();

 
}});


grnBtn2.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(viewarg){


Backmenu.dismiss();
GUIColor = GUIColor15
BackMenu();
currentColour = "green";
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
mbd12();
mb12();

 
}});




cBtn2.setOnClickListener(new  android.view.View.OnClickListener(){

onClick: function(viewarg){
           tmiDialog.dismiss();
}});






} catch(errr) {
print(errr);
}
}}));
}

///////////////
function color1(){
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{

var hackBtn = android.widget.TextView(ctx);

var blackBtn = android.widget.Button(ctx);
blackBtn.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

var whiteBtn = android.widget.Button(ctx);
whiteBtn.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

var pinkBtn = android.widget.Button(ctx);
pinkBtn.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

var redBtn = android.widget.Button(ctx);
redBtn.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

var blueBtn = android.widget.Button(ctx);
blueBtn.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));


var ltgrayBtn = android.widget.Button(ctx);
ltgrayBtn.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));


var grayBtn = android.widget.Button(ctx);
grayBtn.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));


var drkgrayBtn = android.widget.Button(ctx);
drkgrayBtn.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));


var ylwBtn = android.widget.Button(ctx);
ylwBtn.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));


var cyanBtn = android.widget.Button(ctx);
cyanBtn.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));


var grnBtn = android.widget.Button(ctx);
grnBtn.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));


var traBtn = android.widget.Button(ctx);
traBtn.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));


var cBtn = android.widget.Button(ctx);
cBtn.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
cBtn.setTextColor(android.graphics.Color.BLACK);
hackBtn.setText("Transparent Colors");
hackBtn.setTextSize(15);
hackBtn.setTextColor(android.graphics.Color.BLACK);

var tmiLayout = new android.widget.LinearLayout(ctx);
tmiLayout.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.GREEN));
var tmiLayout1 = new android.widget.LinearLayout(ctx);
tmiLayout1.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.GREEN));
var tmiScroll = android.widget.ScrollView(ctx);
tmiScroll.addView(tmiLayout);
tmiLayout1.setOrientation(android.widget.LinearLayout.VERTICAL);
tmiLayout1.addView(tmiScroll);
 
 
var tmiDialog = new android.app.Dialog(ctx);
tmiDialog.setContentView(tmiLayout1);
tmiDialog.setTitle("Color Menu 1");
tmiLayout.setGravity(android.view.Gravity.CENTER);
blackBtn.setText("Black");

whiteBtn.setText("White");

pinkBtn.setText("Pink");

redBtn.setText("Red");

blueBtn.setText("Blue");

ltgrayBtn.setText("Light Gray");

grayBtn.setText("Gray");

drkgrayBtn.setText("Dark Gray");

ylwBtn.setText("Yellow");

cyanBtn.setText("Cyan");

grnBtn.setText("Green");

traBtn.setText("Transparent");

cBtn.setText("Close");


tmiDialog.show();
tmiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
//tmiLayout1.setPadding(25);
tmiLayout.addView(hackBtn);
tmiLayout.addView(blackBtn);
tmiLayout.addView(whiteBtn);
tmiLayout.addView(pinkBtn);
tmiLayout.addView(redBtn);
tmiLayout.addView(blueBtn);
tmiLayout.addView(ltgrayBtn);
tmiLayout.addView(grayBtn);
tmiLayout.addView(drkgrayBtn);
tmiLayout.addView(ylwBtn);
tmiLayout.addView(cyanBtn);
tmiLayout.addView(grnBtn);
tmiLayout.addView(traBtn);
tmiLayout.addView(cBtn);

blackBtn.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(viewarg){


Backmenu.dismiss();
GUIColor = GUIColor2
BackMenu();
currentColour = "black";
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
mbd12();
mb12();
             

}});


 whiteBtn.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(viewarg){


Backmenu.dismiss();
GUIColor = GUIColor3
currentColour = "white";
BackMenu();
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
mbd12();
mb12();


}});


pinkBtn.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(viewarg){


Backmenu.dismiss();
GUIColor = GUIColor99
BackMenu();
currentColour = "pink";
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
mbd12();
mb12();

 
}});


redBtn.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(viewarg){


Backmenu.dismiss();
GUIColor = GUIColor4
BackMenu();
currentColour = "red";
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
mbd12();
mb12();

 
}});


blueBtn.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(viewarg){


Backmenu.dismiss();
GUIColor = GUIColor5
BackMenu();
currentColour = "blue";
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
mbd12();
mb12();

 
}});


ltgrayBtn.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(viewarg){


Backmenu.dismiss();
GUIColor = GUIColor6
BackMenu();
currentColour = "Light Gray";
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
mbd12();
mb12();

 
}});


grayBtn.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(viewarg){


Backmenu.dismiss();
GUIColor = GUIColor7
BackMenu();
currentColour = "Gray";
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
mbd12();
mb12();

 
}});


drkgrayBtn.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(viewarg){


Backmenu.dismiss();
GUIColor = GUIColor10
BackMenu();
currentColour = "Dark Gray";
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
mbd12();
mb12();

 
}});


ylwBtn.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(viewarg){


Backmenu.dismiss();
GUIColor = GUIColor8
BackMenu();
currentColour = "yellow";
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
mbd12();
mb12();

 
}});


cyanBtn.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(viewarg){


Backmenu.dismiss();
GUIColor = GUIColor9
BackMenu();
currentColour = "cyan";
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
mbd12();
mb12();

 
}});


grnBtn.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(viewarg){


Backmenu.dismiss();
GUIColor = GUIColor11
BackMenu();
currentColour = "green";
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
mbd12();
mb12();

 
}});


traBtn.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(viewarg){


Backmenu.dismiss();
GUIColor = GUIColor1
BackMenu();
currentColour = "transparant";
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
mbd12();
mb12();

 
}});



cBtn.setOnClickListener(new  android.view.View.OnClickListener(){

onClick: function(viewarg){
           tmiDialog.dismiss();
}});






} catch(errr) {
print(errr);
}
}}));
}




function hack(){
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
var timeLayout = new android.widget.LinearLayout(ctx);

timeLayout.setGravity(android.view.Gravity.RIGHT);
timeLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
timeLayout.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.GREEN));
var hackBtn = android.widget.TextView(ctx);
var flyBtn = android.widget.Button(ctx);
flyBtn.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
var godBtn = android.widget.Button(ctx);
godBtn.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
var insBtn = android.widget.Button(ctx);
insBtn.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
var cBtn = android.widget.Button(ctx);
cBtn.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
cBtn.setTextColor(android.graphics.Color.BLACK);
hackBtn.setText("Select Menu Position");
hackBtn.setTextSize(15);
hackBtn.setTextColor(android.graphics.Color.BLACK);
flyBtn.setText("Right");
godBtn.setText("Center");
insBtn.setText("Left");

cBtn.setText("Close");
var timeDialog = new android.app.Dialog(ctx);
timeDialog.show();
timeDialog.setContentView(timeLayout);
timeDialog.setTitle("Menu Position");

timeLayout.addView(hackBtn);
timeLayout.addView(flyBtn);
timeLayout.addView(godBtn);
timeLayout.addView(insBtn);
timeLayout.addView(cBtn);

flyBtn.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(viewarg){
              
                  mbd12();
Backmenu.dismiss();
GUIPos = GUIright
GUIPos1 = GUIcen
GUIPos2 = GUIright
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
BackMenu();
mb12()
LEFTmenu.dismiss();
RIGHTmenu.dismiss();      LEFTMenu();
RIGHTMenu();
        
}
});


 godBtn.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(viewarg){
          
 
mbd12();
Backmenu.dismiss();
GUIPos = GUIcen
GUIPos1 = GUIright
GUIPos2 = GUIleft
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
BackMenu();
mb12()
LEFTmenu.dismiss();
RIGHTmenu.dismiss();      LEFTMenu();
RIGHTMenu();
}


}

);

insBtn.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(viewarg){

mbd12();
Backmenu.dismiss();
GUIPos = GUIleft
GUIPos1 = GUIcen
GUIPos2 = GUIleft
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
BackMenu();
mb12()
LEFTmenu.dismiss();
RIGHTmenu.dismiss();      LEFTMenu();
RIGHTMenu();
 
}
});

cBtn.setOnClickListener(new  android.view.View.OnClickListener(){

onClick: function(viewarg){
           timeDialog.dismiss();
}});

} catch(errr) {
print(errr);
}
}}));
}




function teleportation(){
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
var cancelBtn = android.widget.Button(ctx);
cancelBtn.setText("Cancel");
cancelBtn.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
cancelBtn.setTextColor(android.graphics.Color.BLACK);
 var tpLayout = new android.widget.LinearLayout(ctx);
tpLayout.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.RED));
var etX = new android.widget.EditText(ctx);
var etY = new android.widget.EditText(ctx);
var etZ = new android.widget.EditText(ctx);
var txtX = android.widget.TextView(ctx);
txtX.setTextSize(12);
txtX.setText(" X:");
var txtY = android.widget.TextView(ctx);
txtY.setTextSize(12);
txtY.setText(" Y:");
var txtZ = android.widget.TextView(ctx);
txtZ.setTextSize(12);
txtZ.setText(" Z:");
var tpBtn = new android.widget.Button(ctx);
tpBtn.setText("XYZ Teleport");
tpBtn.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
 etX.setInputType(number);
etY.setInputType(number);
etZ.setInputType(number);
etX.setText("0");
etY.setText("0");
etZ.setText("0");
etX.setHint("X");
etY.setHint("Y");
etZ.setHint("Z");
var tpDialog = new android.app.Dialog(ctx);
tpDialog.setContentView(tpLayout);
tpDialog.setTitle("XYZ Teleport"); tpLayout.setGravity(android.view.Gravity.CENTER);
tpLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
tpLayout.addView(txtX);
tpLayout.addView(etX);
tpLayout.addView(txtY);
tpLayout.addView(etY);
tpLayout.addView(txtZ);
tpLayout.addView(etZ);
tpLayout.addView(tpBtn);
tpLayout.addView(cancelBtn);
tpDialog.show();
 tpBtn.setOnClickListener(new android.view.View.OnClickListener(){

onClick: function(viewarg){
if((etX.getText()==0 || etY.getText()==0 || etZ.getText()==0) && (etX.getText()!==0 || etY.getText()!== 0 || etZ.getText()!== 0)){
ModPE.showTipMessage("§4Must be different!");
tpDialog.dismiss();
} else {
var tx = parseInt(etX.getText());
var ty = parseInt(etY.getText());
var tz = parseInt(etZ.getText());

Entity.setPosition(getPlayerEnt(), tx, ty, tz);

tpDialog.dismiss();

}
}

});

cancelBtn.setOnClickListener(new android.view.View.OnClickListener(){ onClick: function(viewarg){
          
          tpDialog.dismiss();
}});

}catch(err){
            ModPE.showTipMessage("An error occured: " + err);
        }}}));

}

function tmiD(){
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
var txtId = android.widget.TextView(ctx);
txtId.setText(" Item Id:");
txtId.setTextSize(12);
var txtAmount = android.widget.TextView(ctx);
txtAmount.setText(" Item Amount:");
txtAmount.setTextSize(12);
var txtData = android.widget.TextView(ctx);
txtData.setText(" Item Data:");
txtData.setTextSize(12);
var tmiLayout = new android.widget.LinearLayout(ctx);
tmiLayout.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.CYAN));
var tmiLayout1 = new android.widget.LinearLayout(ctx);
tmiLayout1.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.CYAN));
var tmiScroll = android.widget.ScrollView(ctx);
tmiScroll.addView(tmiLayout);
tmiLayout1.setOrientation(android.widget.LinearLayout.VERTICAL);
tmiLayout1.addView(tmiScroll);
var tmi = android.widget.Button(ctx);
var id = new android.widget.EditText(ctx);
var amount = new android.widget.EditText(ctx);
var data = new android.widget.EditText(ctx);
var add = new android.widget.Button(ctx);
add.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
var cancel = new android.widget.Button(ctx);
cancel.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
cancel.setTextColor(android.graphics.Color.BLACK);
 tmi.setText("Add Item To Inventory"); 
var tmiDialog = new android.app.Dialog(ctx);
tmiDialog.setContentView(tmiLayout1);
tmiDialog.setTitle("Add Item To Inventory");
tmiLayout.setGravity(android.view.Gravity.CENTER);
cancel.setText("Cancel");
   add.setText("Add");
id.setHint("Item ID");
id.setText("1");
amount.setHint("Amount");
amount.setText("1")
data.setHint("Data/Damage");
data.setText("0");
id.setInputType(numbers);
amount.setInputType(numbers);
data.setInputType(numbers);
var fullstack = android.widget.Button(ctx);
fullstack.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
var currAmount = amount.getText()==1;
fullstack.setText(currAmount?"Fullstack":"One");

tmiDialog.show();
tmiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
//tmiLayout1.setPadding(25);
tmiLayout.addView(txtId);
tmiLayout.addView(id);
tmiLayout.addView(txtAmount);
tmiLayout.addView(amount);
tmiLayout.addView(txtData);
tmiLayout.addView(data);
tmiLayout.addView(fullstack);
tmiLayout.addView(add);
tmiLayout.addView(cancel);

fullstack.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(viewarg){
currAmount = !currAmount;
amount.setText(currAmount?"1":"64");
fullstack.setText(currAmount?"Fullstack":"One");
}});

 add.setOnClickListener(new android.view.View.OnClickListener(){

onClick: function(viewarg){

var itemId = parseInt(id.getText());
var iAmount = parseInt(amount.getText());
var iData = parseInt(data.getText());

if(itemId == null){

itemId = "1";

}

if(iData == null){

iData = "0";


}

Player.addItemInventory(itemId, iAmount, iData);

if(Level.getGameMode() == 1){

Entity.setCarriedItem(getPlayerEnt(), itemId, iAmount, iData);

}

tmiDialog.dismiss();





}


});
cancel.setOnClickListener (new android.view.View.OnClickListener(){
onClick : function(viewarg){

tmiDialog.dismiss();
}});
}
catch(e) {
print(e);

}}}));
}


function MainWeb() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
Weddy = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
Weddy.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.CYAN));
var URL = new android.widget.EditText(ctx);
var Exit = new android.widget.Button(ctx);
var Wed = new android.app.Dialog(ctx);
Wed.setTitle("Browser");
Wed.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Wed.show();
Layer.addView(URL);
Layer.addView(Exit);
Exit.setText("Search");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
Wed.dismiss();
ie = URL.getText().toString().replace(" ", "+").replace("@","%40");
Searched();
}
});

Weddy.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
Weddy.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
Weddy.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Searcher Can't Be Showed Right Now:"+e)
}
}});
}

function Searched() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
Webby = new android.widget.PopupWindow();
var Layer = new android.widget.LinearLayout(ctx);
var Back = new android.widget.Button(ctx);
var Web = new android.app.Dialog(ctx);
var WebKit=new android.webkit.WebView(ctx);
var Set=WebKit.getSettings();
Set.setJavaScriptEnabled(true);
WebKit.setWebChromeClient(new android.webkit.WebChromeClient());
WebKit.setWebViewClient(new android.webkit.WebViewClient());
sites = uri1 + ie + uri2 + ie + uri3;
WebKit.loadUrl(sites);

Web.setTitle("Browser");
Web.setContentView(Layer);

Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Web.show();
Layer.addView(WebKit);
Layer.addView(Back);
Back.setText("Back");

Back.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
MainWeb()
Web.dismiss();
}
});

Webby.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
Webby.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
Webby.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("The Browser Can't Be Showed Right Now:"+e)
}
}});
}



function gameLoop(){
    var thisLoop = new Date;
    fps = 1000 / (thisLoop - lastLoop);
    lastLoop = thisLoop;
}

/* credit to alpha hack team for fps and special creative inv */
/***********************/
function toDirectionalVector(vector, yaw, pitch) {

    vector[0] = Math.cos(yaw) * Math.cos(pitch);
    vector[1] = Math.sin(pitch);
    vector[2] = Math.sin(yaw) * Math.cos(pitch);
}

ModPE.setItem(431,"blaze_rod",0,"§4§l§oM§ba§5g§2i§ec");

function useItem(x, y, z, a, b, c) {
    if (tp == true) {
        setPosition(getPlayerEnt(), x, y + 3.1, z)
    }
}


function attackHook(attacker, victim)
{
destroyerid=431; if(Player.getCarriedItem()==destroyerid&&Player.isPlayer(victim)==false){
Entity.setFireTicks(victim,5);
Entity.setHealth(victim, 3);
curticks=100;
curent=victim;
}

if(switched43)
{
Entity.setHealth(victim, 1);
Entity.setFireTicks(victim, 3);
}

if(switched42) {
    toDirectionalVector(mobDir, (getYaw() + 90) * DEG_TO_RAD, getPitch() * DEG_TO_RAD * -1);
    setVelX(victim, 5 * mobDir[0]);
    setVelZ(victim, 5 * mobDir[2]);
}

if (autocrit == true) {
        setPosition(getPlayerEnt(), Player.getX(), Player.getY() + 1.3, Player.getZ())
    }

if(switched49) {
    Level.addParticle(ParticleType.redstone,Entity.getX(victim),Entity.getY(victim)+1,Entity.getZ(victim)-1,0,0,0,3);
}

{
if(Entity.getEntityTypeId(victim)==15)
{
x="10";
}
else if(Entity.getEntityTypeId(victim)==10)
{
x="4"; 
}
else if(Entity.getEntityTypeId(victim)==11)
{
x="10"; 
}
else if(Entity.getEntityTypeId(victim)==12)
{
x="10"; 
}
else if(Entity.getEntityTypeId(victim)==13)
{
x="8"; 
}
else if(Entity.getEntityTypeId(victim)==14)
{
x="10"; 
}
else if(Entity.getEntityTypeId(victim)==16)
{
x="10"; 
}
else if(Entity.getEntityTypeId(victim)==17)
{
x="10"; 
}
else if(Entity.getEntityTypeId(victim)==32)
{
x="20"; 
}
else if(Entity.getEntityTypeId(victim)==33)
{
x="20"; 
}
else if(Entity.getEntityTypeId(victim)==34)
{
x="15"; 
}
else if(Entity.getEntityTypeId(victim)==35)
{
x="16"; 
}
else if(Entity.getEntityTypeId(victim)==36)
{
x="20"; 
}
else if(Entity.getEntityTypeId(victim)==37)
{
x="16"; 
}
else if(Entity.getEntityTypeId(victim)==38)
{
x="40"; 
}
else if(Entity.getEntityTypeId(victim)==39)
{
x="8"; 
}
else if(Entity.getEntityTypeId(victim)==22)
{
x="10"; 
}
else if(Entity.getEntityTypeId(victim)==18)
{
x="3"; 
}
else if(Entity.getEntityTypeId(victim)==19)
{
x="6"; 
}
else if(Entity.getEntityTypeId(victim)==40)
{
x="12"; 
}
else if(Entity.getEntityTypeId(victim)==41)
{
x="10"; 
}
else if(Entity.getEntityTypeId(victim)==42)
{
x="16"; 
}
else if(Entity.getEntityTypeId(victim)==43)
{
x="20"; 
}
else if(Entity.getEntityTypeId(victim)==44)
{
x="10"; 
}
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get(); 
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){
 
try{
if(activatedGUI==true)
{
GUI.dismiss();
GUI2.dismiss();
GUI3.dismiss();
GUI4.dismiss();
activatedGUI=false;
}

activatedGUI=true;
GUI = new android.widget.PopupWindow();
var layout = new android.widget.LinearLayout(ctx);
layout.setOrientation(android.widget.LinearLayout.VERTICAL);
GUI.setContentView(layout);
GUI.setWidth(405);
GUI.setHeight(105);
var btn = new android.widget.Button(ctx);
layout.addView(btn);
btn.setBackgroundDrawable(mainimg);
btn.setText("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
GUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, 10, 40);

GUI2 = new android.widget.PopupWindow();
var layout2 = new android.widget.LinearLayout(ctx);
layout2.setOrientation(android.widget.LinearLayout.VERTICAL);
GUI2.setContentView(layout2);
GUI2.setWidth(37);
GUI2.setHeight(75);
var btn2 = new android.widget.Button(ctx);
layout2.addView(btn2);
if(Entity.getEntityTypeId(victim)==15)
{
btn2.setBackgroundDrawable(villagerimg);
}
else if(Entity.getEntityTypeId(victim)==10)
{
btn2.setBackgroundDrawable(chickenimg);
}
else if(Entity.getEntityTypeId(victim)==11)
{
btn2.setBackgroundDrawable(cowimg);
}
else if(Entity.getEntityTypeId(victim)==12)
{
btn2.setBackgroundDrawable(pigimg);
}
else if(Entity.getEntityTypeId(victim)==13)
{
btn2.setBackgroundDrawable(sheepimg);
}
else if(Entity.getEntityTypeId(victim)==14)
{
btn2.setBackgroundDrawable(wolfimg);
}
else if(Entity.getEntityTypeId(victim)==16)
{
btn2.setBackgroundDrawable(mooshroomimg);
}
else if(Entity.getEntityTypeId(victim)==17)
{
btn2.setBackgroundDrawable(squidimg);
}
else if(Entity.getEntityTypeId(victim)==32)
{
btn2.setBackgroundDrawable(zombieimg);
}
else if(Entity.getEntityTypeId(victim)==33)
{
btn2.setBackgroundDrawable(creeperimg);
}
else if(Entity.getEntityTypeId(victim)==34)
{
btn2.setBackgroundDrawable(skeletonimg);
}
else if(Entity.getEntityTypeId(victim)==35)
{
btn2.setBackgroundDrawable(spiderimg);
}
else if(Entity.getEntityTypeId(victim)==36)
{
btn2.setBackgroundDrawable(zombiepigmanimg);
}
else if(Entity.getEntityTypeId(victim)==37)

{
btn2.setBackgroundDrawable(slimeimg);
}
else if(Entity.getEntityTypeId(victim)==38)
{
btn2.setBackgroundDrawable(endermanimg);
}
else if(Entity.getEntityTypeId(victim)==39)
{
btn2.setBackgroundDrawable(silverfishimg);
}
else if(Entity.getEntityTypeId(victim)==22)
{
btn2.setBackgroundDrawable(ocelotimg);
}
else if(Entity.getEntityTypeId(victim)==18)
{
btn2.setBackgroundDrawable(rabbitimg);
}
else if(Entity.getEntityTypeId(victim)==19)
{
btn2.setBackgroundDrawable(batimg);
}
else if(Entity.getEntityTypeId(victim)==40)
{
btn2.setBackgroundDrawable(cavespiderimg);
}
else if(Entity.getEntityTypeId(victim)==41)
{
btn2.setBackgroundDrawable(ghastimg);
}
else if(Entity.getEntityTypeId(victim)==42)
{
btn2.setBackgroundDrawable(magmacubeimg);
}
else if(Entity.getEntityTypeId(victim)==43)
{
btn2.setBackgroundDrawable(blazeimg);
}
else if(Entity.getEntityTypeId(victim)==44)
{
btn2.setBackgroundDrawable(zombieimg);
}
btn2.setText("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
GUI2.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, 45, 55);

GUI3 = new android.widget.PopupWindow();
var layout3 = new android.widget.LinearLayout(ctx);
layout3.setOrientation(android.widget.LinearLayout.VERTICAL);
GUI3.setContentView(layout3);
GUI3.setWidth(250);
GUI3.setHeight(250);
var btn3 = new android.widget.Button(ctx);
layout3.addView(btn3);
btn3.setBackgroundDrawable(nothingimg);
if(Entity.getEntityTypeId(victim)==15)
{
btn3.setText("Villager"); 
}
else if(Entity.getEntityTypeId(victim)==10)
{
btn3.setText("Chicken"); 
}
else if(Entity.getEntityTypeId(victim)==11)
{
btn3.setText("Cow"); 
}
else if(Entity.getEntityTypeId(victim)==12)
{
btn3.setText("Pig"); 
}
else if(Entity.getEntityTypeId(victim)==13)
{
btn3.setText("Sheep"); 
}
else if(Entity.getEntityTypeId(victim)==14)
{
btn3.setText("Wolf"); 
}
else if(Entity.getEntityTypeId(victim)==16)
{
btn3.setText("Mooshroom"); 
}
else if(Entity.getEntityTypeId(victim)==17)
{
btn3.setText("Squid"); 
}
else if(Entity.getEntityTypeId(victim)==32)
{
btn3.setText("Zombie"); 
}
else if(Entity.getEntityTypeId(victim)==33)
{
btn3.setText("Creeper"); 
}
else if(Entity.getEntityTypeId(victim)==34)
{
btn3.setText("Skeleton"); 
}
else if(Entity.getEntityTypeId(victim)==35)
{
btn3.setText("Spider"); 
}
else if(Entity.getEntityTypeId(victim)==36)
{
btn3.setText("Pig Zombie"); 
}
else if(Entity.getEntityTypeId(victim)==37)
{
btn3.setText("Slime"); 
}
else if(Entity.getEntityTypeId(victim)==38)
{
btn3.setText("Enderman"); 
}
else if(Entity.getEntityTypeId(victim)==39)
{
btn3.setText("Silverfish"); 
}
else if(Entity.getEntityTypeId(victim)==22)
{
btn3.setText("Ocelot"); 
}
else if(Entity.getEntityTypeId(victim)==18)
{
btn3.setText("Rabbit"); 
}
else if(Entity.getEntityTypeId(victim)==19)
{
btn3.setText("Bat"); 
}
else if(Entity.getEntityTypeId(victim)==40)
{
btn3.setText("Cave Spider"); 
}
else if(Entity.getEntityTypeId(victim)==41)
{
btn3.setText("Ghast"); 
}
else if(Entity.getEntityTypeId(victim)==42)
{
btn3.setText("Magma Cube"); 
}
else if(Entity.getEntityTypeId(victim)==43)
{
btn3.setText("Blaze"); 
}
else if(Entity.getEntityTypeId(victim)==44)
{
btn3.setText("Zombie"); 
}
GUI3.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, NameX, NameY);

GUI4 = new android.widget.PopupWindow();
var layout4 = new android.widget.LinearLayout(ctx);
layout4.setOrientation(android.widget.LinearLayout.VERTICAL);
GUI4.setContentView(layout4);
GUI4.setWidth(250);
GUI4.setHeight(250);
var btn4 = new android.widget.Button(ctx);
layout4.addView(btn4);
btn4.setBackgroundDrawable(nothingimg);

btn4.setText(Entity.getHealth(victim)+ " / "+x);

GUI4.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP, HealthX, HealthY);
}
catch(e)
{
}
}
})
start=true;
}
if(setName==1) {
	Entity.setNameTag(victim,dup);
	clientMessage("§4Continues Naming Disabled");
	setName = 0;
	dup = "";
}
if(setName==2)  {
	Entity.setNameTag(victim,dup);
	clientMessage("§2Continues Naming Enabled For 1 Minute");
}
}

function getRandomColor(){
var a=Object.keys(ChatColor);
return ChatColor[a[Math.floor(Math.random()*(a.length+1))]]
}


//Update Code//
var version="1.8";
var checkForUpdate=false;
var updateWindow=false;
var newUpdate;
var updateMod; 
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get(); 
 
 function checkVersion() {
    var r  = new java.lang.Runnable() {
        run: function() {
            try {
                var urls= new java.net.URL("https://raw.githubusercontent.com/GoogleX133/AJR/master/Ver.txt");
                var check = urls.openConnection();
                check.setRequestMethod("GET");
                check.setDoOutput(true);
                check.connect();
                check.getContentLength();
                var script = check.getInputStream();
                var typeb = java.lang.reflect.Array.newInstance(java.lang.Byte.TYPE, 1024);
                var byteCount = 0; 
                var checkedVersion;
                while((byteCount = script.read(typeb)) != -1) { 
                    checkedVersion = new java.lang.String(typeb, 0, byteCount);               
                }
                newUpdate = checkedVersion;
                if(version+"\n" != checkedVersion) {
                    clientMessage("AJModsMCPE Re Edt. " + newUpdate);
                    updateWindow=true;
                }
                else if(version+"\n"==checkedVersion){
                clientMessage("Latest Version !");
                }
            }
            catch(err) {
                clientMessage("Update gagal ");
                if(err=="JavaException: java.net.UnknownHostException: Unable to resolve host") {
                                clientMessage("Tidak ada koneksi.");
                            }
                            else {
                                clientMessage("Error: \n" + err);
                            } 
            }
        }
    }
    var threadt = new java.lang.Thread(r);
    threadt.start();
}
function updateVersion() {
    try {
        var upd = new android.app.AlertDialog.Builder(ctx);
        upd.setTitle("Update !");
        upd.setMessage("Kami mempunyai update terbaru!\nMaukah kau untuk update?\nVersi Sekarang: " + version + "\nVersi Terbaru: " + newUpdate + "\nMohon Reload BlockLauncher Setelah Update!");
        upd.setNegativeButton("Tidak", new android.content.DialogInterface.OnClickListener() {
            onClick: function(par1) {
            dialog.dismiss(); 
   }
        });
        upd.setPositiveButton("Ya", new android.content.DialogInterface.OnClickListener() {
            onClick: function(par1) {
				 android.widget.Toast.makeText(ctx,"Opening the URL...",0).show();
						var intentBrowser = new android.content.Intent(ctx);
						intentBrowser.setAction(android.content.Intent.ACTION_VIEW);
						intentBrowser.setData(android.net.Uri.parse("https://www.facebook.com/groups/AJRMOD.UPDATE/"));
	             ctx.startActivity(intentBrowser)
            }
        });
        var dialog = upd.create();
        dialog.show() 
    }
    catch(err) {
        clientMessage(" Error: \n" + err);
    }
}

//Music Dialog (GLX) *Dev
function MusicPF() {
	try{
        var mpf = new android.app.AlertDialog.Builder(ctx);
        mpf.setTitle("Musik");
        mpf.setMessage("Kami punya musik player ! \nIngin mendengarkan musik ?");
        mpf.setNegativeButton("Tidak", new android.content.DialogInterface.OnClickListener() {
            onClick: function(x) {
            dialog.dismiss(); 
   }
        });
        mpf.setPositiveButton("Ya", new android.content.DialogInterface.OnClickListener() {
            onClick: function(x) {
				 playMusic();
				 clientMessage("Enjoy your music ^-^");
            }
        });
        var dialog = mpf.create();
        dialog.show() 
	}
    catch(err) {
        clientMessage("Error: \n" + err);
    }
}

function modTick() {
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get(); 
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){
if(activatedChangingGUI==1)
{
activatedChangingGUI=0;
GUI5 = new android.widget.PopupWindow();
var layout5 = new android.widget.LinearLayout(ctx);
layout5.setOrientation(android.widget.LinearLayout.VERTICAL);
GUI5.setContentView(layout5);
GUI5.setWidth(75);
GUI5.setHeight(75);
var btn5 = new android.widget.Button(ctx);
layout5.addView(btn5);
btn5.setText("-");
btn5.setOnClickListener(new android.view.View.OnClickListener({ 
onClick: function(viewarg)
{
NameX= NameX-5;
}
}));
GUI5.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, 5, 5);

GUI6 = new android.widget.PopupWindow();
var layout6 = new android.widget.LinearLayout(ctx);
layout6.setOrientation(android.widget.LinearLayout.VERTICAL);
GUI6.setContentView(layout6);
GUI6.setWidth(75);
GUI6.setHeight(75);
var btn6 = new android.widget.Button(ctx);
layout6.addView(btn6);
btn6.setText("+");
btn6.setOnClickListener(new android.view.View.OnClickListener({ 
onClick: function(viewarg)
{
NameX= NameX+5;
}
}));
GUI6.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, 5, 85);

GUI7 = new android.widget.PopupWindow();
var layout7 = new android.widget.LinearLayout(ctx);
layout7.setOrientation(android.widget.LinearLayout.VERTICAL);
GUI7.setContentView(layout7);
GUI7.setWidth(75);
GUI7.setHeight(75);
var btn7 = new android.widget.Button(ctx);
layout7.addView(btn7);
btn7.setText("-");
btn7.setOnClickListener(new android.view.View.OnClickListener({ 
onClick: function(viewarg)
{
NameY= NameY-5;
}
}));
GUI7.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, 85, 5);

 GUI8 = new android.widget.PopupWindow();
var layout8 = new android.widget.LinearLayout(ctx);
layout8.setOrientation(android.widget.LinearLayout.VERTICAL);
GUI8.setContentView(layout8);
GUI8.setWidth(75);
GUI8.setHeight(75);
var btn8 = new android.widget.Button(ctx);
layout8.addView(btn8);
btn8.setText("+");
btn8.setOnClickListener(new android.view.View.OnClickListener({ 
onClick: function(viewarg)
{
NameY= NameY+5;
}
}));
GUI8.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, 85, 85);

GUI9 = new android.widget.PopupWindow();
var layout9 = new android.widget.LinearLayout(ctx);
layout9.setOrientation(android.widget.LinearLayout.VERTICAL);
GUI9.setContentView(layout9);
GUI9.setWidth(75);
GUI9.setHeight(75);
var btn9 = new android.widget.Button(ctx);
layout9.addView(btn9);
btn9.setText("-");
btn9.setOnClickListener(new android.view.View.OnClickListener({ 
onClick: function(viewarg)
{
HealthX= HealthX-5;
}
}));
GUI9.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, 5, 165);

GUI10 = new android.widget.PopupWindow();
var layout10 = new android.widget.LinearLayout(ctx);
layout10.setOrientation(android.widget.LinearLayout.VERTICAL);
GUI10.setContentView(layout10);
GUI10.setWidth(75);
GUI10.setHeight(75);
var btn10 = new android.widget.Button(ctx);
layout10.addView(btn10);
btn10.setText("+");
btn10.setOnClickListener(new android.view.View.OnClickListener({ 
onClick: function(viewarg)
{
HealthX= HealthX+5;
}
}));
GUI10.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, 5, 245);

GUI11 = new android.widget.PopupWindow();
var layout11 = new android.widget.LinearLayout(ctx);
layout11.setOrientation(android.widget.LinearLayout.VERTICAL);
GUI11.setContentView(layout11);
GUI11.setWidth(75);
GUI11.setHeight(75);
var btn11 = new android.widget.Button(ctx);
layout11.addView(btn11);
btn11.setText("-");
btn11.setOnClickListener(new android.view.View.OnClickListener({ 
onClick: function(viewarg)
{
HealthY= HealthY-5;
}
}));
GUI11.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, 85, 165);

 GUI12 = new android.widget.PopupWindow();
var layout12 = new android.widget.LinearLayout(ctx);
layout12.setOrientation(android.widget.LinearLayout.VERTICAL);
GUI12.setContentView(layout12);
GUI12.setWidth(75);
GUI12.setHeight(75);
var btn12 = new android.widget.Button(ctx);
layout12.addView(btn12);
btn12.setText("+");
btn12.setOnClickListener(new android.view.View.OnClickListener({ 
onClick: function(viewarg)
{
HealthY= HealthY+5;
}
}));
GUI12.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.BOTTOM, 85, 245);
}
else if(activatedChangingGUI==2)
{
GUI5.dismiss();
GUI6.dismiss();
GUI7.dismiss();
GUI8.dismiss();
GUI9.dismiss();
GUI10.dismiss();
GUI11.dismiss();
GUI12.dismiss();
}
}
})

if(start==true)
{
ticker--;
}
if(ticker==0)
{
start=false;
ticker=60;
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get(); 
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){
GUI.dismiss();
GUI2.dismiss();
GUI3.dismiss();
GUI4.dismiss();
}
})
}

if(switched25) {
var PlayerX =parseInt(Player.getX());
var PlayerY =parseInt(Player.getY());
var PlayerZ =parseInt(Player.getZ());
if(getTile(PlayerX+1, PlayerY, PlayerZ) !=0 
|| getTile(PlayerX-1, PlayerY, PlayerZ) !=0 
|| getTile(PlayerX, PlayerY, PlayerZ+1) !=0 
|| getTile(PlayerX, PlayerY, PlayerZ-1) !=0) {
if(Entity.getVelY(getPlayerEnt()) <= 0.6) {
setVelY(getPlayerEnt(), 0.6);
}
}
}

if(switched26)
{
var px = getPlayerX();
var py = getPlayerY();
var pz = getPlayerZ();
ModPE.showTipMessage("\n\n\n\n" + "X: " + parseInt(px) + " Y: " + parseInt(py) + " Z: " + parseInt(pz));
}

if(switched27)
	{

	if(Level.getTile(getPlayerX(), getPlayerY()-2, getPlayerZ())==8 || Level.getTile(getPlayerX(), getPlayerY()-2, getPlayerZ())==9 || Level.getTile(getPlayerX(), getPlayerY()-2, getPlayerZ())==10 || Level.getTile(getPlayerX(), getPlayerY()-2, getPlayerZ())==11) {
			setVelY(getPlayerEnt(), 0);
		}
	}

	/* if(switched28) {
		if(Entity.getVelY(getPlayerEnt())< -0.1) {
			setVelY(getPlayerEnt(),-0.5);
		}
		if(Entity.getVelY(getPlayerEnt())< 0.35 && Entity.getVelY(getPlayerEnt())> 0.2 && can==1 && canGetHP==1) {
			setVelY(getPlayerEnt(), 0.6);
			can = 2;
			HP = Entity.getHealth(getPlayerEnt());
			canGetHP = 0;
		}
		if(Entity.getVelY(getPlayerEnt())>gravity && can==2) {
			Player.setHealth(HP);
			canGetHP = 1;
			can = 0;
		}
		if(Entity.getVelY(getPlayerEnt())==gravity && can==0) {
			Player.setHealth(HP);
			canGetHP = 1;
			can = 1;
		}
	} */

if(switched29)
	{
		if(s==1)
		{
			Xpos=getPlayerX();
			Zpos=getPlayerZ();
			s=s+1;
		}
		else 
		{
			if(s==3)
			{
				s=1;
				Xdiff=getPlayerX()-Xpos;
				Zdiff=getPlayerZ()-Zpos;
				setVelX(getPlayerEnt(), Xdiff);
				setVelZ(getPlayerEnt(), Zdiff);
				Xdiff=0;
				Zdiff=0;
			}
		}
		if(s!=1)
		{
			s=s+1;
		}
	}

	if(switched30)
	{
		if(Entity.getVelY(Player.getEntity()) <= -0.5 && !isFalling)
		{
			// Player is falling
			if(Level.getGameMode() == 0)
				Entity.addEffect(Player.getEntity(), MobEffect.jump, 999999, 254, false, false);

			isFalling = true;
		}

		if(isFalling)
		{
			if(Level.getTile(Math.floor(Player.getX()), Math.floor(Player.getY()) - 2, Math.floor(Player.getZ())) > 0)
			{
				if(Entity.getVelY(Player.getEntity()) == VEL_Y_OFFSET)
				{

					isFalling = false;

					if(Level.getGameMode() == 0)
					{
						// Entity.removeEffect(entity, id) doesn't remove particles of the effect https://github.com/zhuowei/MCPELauncher/issues/241

						//Entity.removeEffect(Player.getEntity(), MobEffect.jump);
						Entity.removeAllEffects(Player.getEntity());
					}
				}
			}
		}
	}

if(switched32)
{
carriedItem=Player.getCarriedItem();

if(carriedItem==261){
ModPE.setFov(20);
zoom=false;
}

if(zoom==false){
if(carriedItem!=261){
ModPE.resetFov();
zoom=true;
}
}
}

if(switched31)
{
Player.setHealth(1000);
}

	if(switched33) {
		var player = getPlayerEnt();
		var y = Math.floor(Entity.getYaw(player));
		var p = Math.floor(Entity.getPitch(player));
		Entity.setRot(player, y+3, p);
	}

if(switched34)
{
Player.setHunger(20);
}

	if(switched35)
{		Level.destroyBlock(Player.getPointedBlockX(), Player.getPointedBlockY(), Player.getPointedBlockZ())
}

if(switched36)
{
Level.setTime(0);
}



if(switched37)
{
        var px = getPlayerX();
var py = getPlayerY();
var pz = getPlayerZ();
ModPE.showTipMessage("X: " + parseInt(px) + " Y: " + parseInt(py) + " Z: " + parseInt(pz) + " Gamemode: " + Level.getGameMode() + "." + " Time: " + Level.getTime() + "." + " \nRain/Lightning: " + Math.round(Level.getRainLevel()) + "/" + Math.round(Level.getLightningLevel()) + ". " + "Name: " + Player.getName(Player.getEntity()) + "\nItem ID: " + Player.getCarriedItem() + ":" + Player.getCarriedItemData() + "." + " Biome: " + Level.getBiomeName() + "." + " V" + ModPE.getMinecraftVersion() + "\nWorld Name: " + Level.getWorldName() + "\nArea Brightness: " + Level.getBrightness(getPlayerX(), getPlayerY(), getPlayerZ()) + ". " + "Pointed Block Id : " + Player.getPointedBlockId() + ". " + "Player Health: " + Entity.getHealth(getPlayerEnt())+"/20");
}

if(curticks>0)
{
curticks=curticks-1;
Entity.setVelX(curent,Math.random()*2-1);
Entity.setVelY(curent,Math.random()*2-1);
Entity.setVelZ(curent,Math.random()*2-1);
}

if(switched38)
{
 
        var x = 
Player.getX();
        var y = Player.getY();
        var z = Player.getZ();      Level.addParticle(ParticleType.portal, Entity.getX(Player.getEntity()) + 0, Entity.getY(Player.getEntity()) - 1, Entity.getZ(Player.getEntity()) + 0, 0, 0, 0, 8);
Level.addParticle(ParticleType.portal, Entity.getX(Player.getEntity()) + 0, Entity.getY(Player.getEntity()) + 1, Entity.getZ(Player.getEntity()) + 0, 0, 0, 0, 8);
Level.addParticle(ParticleType.portal, Entity.getX(Player.getEntity()) + 1, Entity.getY(Player.getEntity()) - 1, Entity.getZ(Player.getEntity()) + 0, 0, 0, 0, 1);
Level.addParticle(ParticleType.portal, Entity.getX(Player.getEntity()) + 0, Entity.getY(Player.getEntity()) - 1, Entity.getZ(Player.getEntity()) + 1, 0, 0, 0, 1);
Level.addParticle(ParticleType.portal, Entity.getX(Player.getEntity()) - 1, Entity.getY(Player.getEntity()) - 1, Entity.getZ(Player.getEntity()) + 0, 0, 0, 0, 1);
Level.addParticle(ParticleType.portal, Entity.getX(Player.getEntity()) + 0, Entity.getY(Player.getEntity()) - 1, Entity.getZ(Player.getEntity()) - 1, 0, 0, 0, 1);
Level.addParticle(ParticleType.portal, Entity.getX(Player.getEntity()) + 1, Entity.getY(Player.getEntity()) + 1, Entity.getZ(Player.getEntity()) + 0, 0, 0, 0, 8);
Level.addParticle(ParticleType.portal, Entity.getX(Player.getEntity()) + 0, Entity.getY(Player.getEntity()) + 1, Entity.getZ(Player.getEntity()) + 1, 0, 0, 0, 8);
Level.addParticle(ParticleType.portal, Entity.getX(Player.getEntity()) - 1, Entity.getY(Player.getEntity()) + 1, Entity.getZ(Player.getEntity()) + 0, 0, 0, 0, 8);
Level.addParticle(ParticleType.portal, Entity.getX(Player.getEntity()) + 0, Entity.getY(Player.getEntity()) + 1, Entity.getZ(Player.getEntity()) - 1, 0, 0, 0, 8);
Level.addParticle(ParticleType.portal,Entity.getX(Player.getEntity()) + 0, Entity.getY(Player.getEntity()) + 0,
Entity.getZ(Player.getEntity()) + 1, 0, 0, 0, 8);
Level.addParticle(ParticleType.portal,Entity.getX(Player.getEntity()) + 0, Entity.getY(Player.getEntity()) + 0,
Entity.getZ(Player.getEntity()) - 1, 0, 0, 0, 8);
Level.addParticle(ParticleType.portal,Entity.getX(Player.getEntity()) + 1, Entity.getY(Player.getEntity()) + 0,
Entity.getZ(Player.getEntity()) + 0, 0, 0, 0, 8);
Level.addParticle(ParticleType.portal,Entity.getX(Player.getEntity()) - 1, Entity.getY(Player.getEntity()) + 0,
Entity.getZ(Player.getEntity()) + 0, 0, 0, 0, 8);

}

if(switched39)
{
setVelY(Player.getEntity(), -0.1)
}

if(switched40)
{
if(Player.getSelectedSlotId() != 7) {
			Player.setSelectedSlotId(Player.getSelectedSlotId() + 1);
		} else {
			Player.setSelectedSlotId(0)
}
   }

if(switched41)
{
ModPE.showTipMessage("\n\n\n" + Player.getName(Player.getEntity()) + "'s Health: " + Entity.getHealth(getPlayerEnt())+"/20");
}

if(toggled1)
{
ModPE.showTipMessage("\n\n\nCurrent FPS: " + Math.round(fps));
gameLoop()
}

if(jumpHeight!="1" && Entity.getVelY(getPlayerEnt())>0 && jump==0){
		setVelY(getPlayerEnt(), jumpVel);
		jump = 1;
	}
	else if(getTile(getPlayerX(), getPlayerY()-2, getPlayerZ())!=0&&jump==1){
		jump = 0;
	}

if(switched45==true){


Server.sendChat(getRandomColor() + "❤");

}
if(switched45==true){


Server.sendChat(getRandomColor() + "");

}

if(sspam==true){


Server.sendChat(text);

}

if(sspam==true){


Server.sendChat("");

}

if(sspam==true){


Server.sendChat(text);

}

if(sspam==true){


Server.sendChat("");

}

if(switched46)
{
ModPE.showTipMessage(getRandomColor() + "" + Player.getName(Player.getEntity()) + "");
}

if(switched47==true){
clientMessage(" ");
}

if(switched47==true){
clientMessage(" ");
}

if(switched47==true){
clientMessage(" ");
}

if (pointKill == true) {
        for (ent = 1; ent <= 100; ent++) {
            if (Entity.getEntityTypeId(Player.getPointedEntity()) == ent) {
                Entity.setHealth(Player.getPointedEntity(), -1)
            }
        }
    }

if (entiStop == true) {
        for (ent = 1; ent <= 100; ent++) {
            if (Entity.getEntityTypeId(Player.getPointedEntity()) == ent) {
                Entity.setPositionRelative(Player.getPointedEntity(), Entity.getX(), Entity.getY() + 0.5, Entity.getZ())
}
    }
        }

if(switched48)
{
if(Player.getCarriedItem()==50){
setTile(getPlayerX(), getPlayerY(), getPlayerZ(), 200);
}
if(Player.getCarriedItem()==325&&Player.getCarriedItemData()==10){
setTile(getPlayerX(), getPlayerY(), getPlayerZ(), 200);
}
if(Player.getCarriedItem()==89){
setTile(getPlayerX(), getPlayerY(), getPlayerZ(), 200);
}
if(Player.getCarriedItem()==359){
Block.setDestroyTime(214, 0);
}
var x = Player.getX();
var y = Player.getY();
var z = Player.getZ();
if(getTile(x-1,y,z)==200){
setTile(x-1,y,z,0);
}
var x = Player.getX();
var y = Player.getY();
var z = Player.getZ();
if(getTile(x+1,y,z)==200){
setTile(x+1,y,z,0);
}
var x = Player.getX();
var y = Player.getY();
var z = Player.getZ();
if(getTile(x,y,z-1)==200){
setTile(x,y,z-1,0);
}
var x = Player.getX();
var y = Player.getY();
var z = Player.getZ();
if(getTile(x,y,z+1)==200){
setTile(x,y,z+1,0);
}
var x = Player.getX();
var y = Player.getY();
var z = Player.getZ();
if(getTile(x-1,y,z+1)==200){
setTile(x-1,y,z+1,0);
}
var x = Player.getX();
var y = Player.getY();
var z = Player.getZ();
if(getTile(x-1,y,z-1)==200){
setTile(x-1,y,z-1,0);
}
var x = Player.getX();
var y = Player.getY();
var z = Player.getZ();
if(getTile(x+1,y,z+1)==200){
setTile(x+1,y,z+1,0);
}
var x = Player.getX();
var y = Player.getY();
var z = Player.getZ();
if(getTile(x+1,y,z-1)==200){
setTile(x+1,y,z-1,0);
}
var x = Player.getX();
var y = Player.getY();
var z = Player.getZ();
if(getTile(x,y-1,z)==200){
setTile(x,y-1,z,0);
}
var x = Player.getX();
var y = Player.getY();
var z = Player.getZ();
if(getTile(x,y+1,z)==200){
setTile(x,y+1,z,0);
}
}

if(switched50)
{
var mobs = Entity.getAll();
	for(var i = 0; i < mobs.length; i++) {
		var x = Entity.getX(mobs[i]) - getPlayerX();
		var y = Entity.getY(mobs[i]) - getPlayerY();
		var z = Entity.getZ(mobs[i]) - getPlayerZ();
		if(x*x+y*y+z*z<=4*4 && mobs[i] != getPlayerEnt() && Entity.getEntityTypeId(mobs[i]) != EntityType.ARROW && Entity.getEntityTypeId(mobs[i]) != EntityType.BOAT && Entity.getEntityTypeId(mobs[i]) != EntityType.EGG && Entity.getEntityTypeId(mobs[i]) != EntityType.EXPERIENCE_ORB && Entity.getEntityTypeId(mobs[i]) != EntityType.EXPERIENCE_POTION && Entity.getEntityTypeId(mobs[i]) != EntityType.FALLING_BLOCK && Entity.getEntityTypeId(mobs[i]) != EntityType.FIREBALL && Entity.getEntityTypeId(mobs[i]) != EntityType.FISHING_HOOK && Entity.getEntityTypeId(mobs[i]) != EntityType.ITEM && Entity.getEntityTypeId(mobs[i]) != EntityType.LIGHTNING_BOLT && Entity.getEntityTypeId(mobs[i]) != EntityType.MINECART && Entity.getEntityTypeId(mobs[i]) != EntityType.PAINTING && Entity.getEntityTypeId(mobs[i]) != EntityType.PRIMED_TNT && Entity.getEntityTypeId(mobs[i]) != EntityType.SMALL_FIREBALL && Entity.getEntityTypeId(mobs[i]) != EntityType.SNOWBALL && Entity.getEntityTypeId(mobs[i]) != EntityType.THROWN_POTION) {
			if(Entity.getX(mobs[i]) > getPlayerX() && Entity.getZ(mobs[i]) > getPlayerZ()) {
				setRot(90, getPitch());
			}
			Entity.setHealth(mobs[i], 0);
		}
	}
}

if(switched51)
{
var mobs = Entity.getAll();
	for(var i = 0; i < mobs.length; i++) {
		var x = Entity.getX(mobs[i]) - getPlayerX();
		var y = Entity.getY(mobs[i]) - getPlayerY();
		var z = Entity.getZ(mobs[i]) - getPlayerZ();
		if(x*x+y*y+z*z<=4*4 && mobs[i] != getPlayerEnt() && Entity.getEntityTypeId(mobs[i]) != EntityType.ARROW && Entity.getEntityTypeId(mobs[i]) != EntityType.BOAT && Entity.getEntityTypeId(mobs[i]) != EntityType.EGG && Entity.getEntityTypeId(mobs[i]) != EntityType.EXPERIENCE_ORB && Entity.getEntityTypeId(mobs[i]) != EntityType.EXPERIENCE_POTION && Entity.getEntityTypeId(mobs[i]) != EntityType.FALLING_BLOCK && Entity.getEntityTypeId(mobs[i]) != EntityType.FIREBALL && Entity.getEntityTypeId(mobs[i]) != EntityType.FISHING_HOOK && Entity.getEntityTypeId(mobs[i]) != EntityType.ITEM && Entity.getEntityTypeId(mobs[i]) != EntityType.LIGHTNING_BOLT && Entity.getEntityTypeId(mobs[i]) != EntityType.MINECART && Entity.getEntityTypeId(mobs[i]) != EntityType.PAINTING && Entity.getEntityTypeId(mobs[i]) != EntityType.PRIMED_TNT && Entity.getEntityTypeId(mobs[i]) != EntityType.SMALL_FIREBALL && Entity.getEntityTypeId(mobs[i]) != EntityType.SNOWBALL && Entity.getEntityTypeId(mobs[i]) != EntityType.THROWN_POTION) {
			if(Entity.getX(mobs[i]) > getPlayerX() && Entity.getZ(mobs[i]) > getPlayerZ()) {
				setRot(90, getPitch());
			}
			Entity.setImmobile(mobs[i], true);
		}
	}
}

if(setName==3) {
	dup = "";
	setName = 0;
}
if(cntr==1) {
tick++;
	if(tick==20) {
		tickSec++;
		tick = 0;
		clientMessage("A Second Has Passed");
	}
	if(tickSec==60) {
		tickMin++;
		tickSec = 0;
		clientMessage("A Minute Has Passed");
	}
	if(setName==2 && tickMin==1) {
		cntr = 0;
		setName = 0;
		clientMessage(ChatColor.RED + "Continues Naming Disabled");
	}
}
if(cntr==0) {
	tick = 0;
	tickSec = 0;
	tickMin = 0;
}

if (startMapControl) {
		startMapControl = false;
		mapWindow.show();
		log.write("minimap started");
		createPool();
	}

if(switched52)
{
if(Level.getTile(getPlayerX(), getPlayerY()-2, getPlayerZ())==8 || 
		Level.getTile(getPlayerX(), getPlayerY()-2, getPlayerZ())==9 || 
		Level.getTile(getPlayerX(), getPlayerY()-2, getPlayerZ())==10 || 
		Level.getTile(getPlayerX(), getPlayerY()-2, getPlayerZ())==11)
			{
				setVelY(getPlayerEnt(), 0.5);
			}
	}

if(switched53)
{
if(Level.getTile(getPlayerX(), getPlayerY()-0, getPlayerZ())==8 || 
		Level.getTile(getPlayerX(), getPlayerY()-0, getPlayerZ())==9 || 
		Level.getTile(getPlayerX(), getPlayerY()-0, getPlayerZ())==10 || 
		Level.getTile(getPlayerX(), getPlayerY()-0, getPlayerZ())==11)
			{
				setVelY(getPlayerEnt(), 0.5);
			}
	}

if(switched54)
{
if(Entity.getVelY(getPlayerEnt())< -0.1) {
			setVelY(getPlayerEnt(),0.1);
		}
}






if (selected==13||selected==22||selected==23){
size=100
}
else {
size=.5
}

if (arrows[0]) {

for (var i in arrows){
if (Entity.getVelX(arrows[i])==0&&Entity.getVelY(arrows[i])==0&&Entity.getVelZ(arrows[i])==0){
arrows.splice(i, 1);
}
var x=Entity.getX(arrows[i]);
var y=Entity.getY(arrows[i]);
var z=Entity.getZ(arrows[i]);

Level.addParticle(particle[selected], x,y,z, 1, 1, 1, size);

}
}

if(checkForUpdate==false) {
        print("Checking for an update");
        ctx.runOnUiThread(new java.lang.Runnable({
            run: function() {
                try {
                    checkVersion();
                }
                catch(err) {
                    clientMessage(" Error: \n"+err);
                }
            }
        }));
        checkForUpdate=true;
    }
    if(updateWindow) {
        ctx.runOnUiThread(new java.lang.Runnable({
            run: function() {
                try {
                    updateVersion();
                }
                catch(err) {
                    clientMessage(" Error: \n" + err);
                }
            }
        }));
        updateWindow=false;
    } 
 }
//END OF UPDATE CODE// CREDITS TO @Coder_G for making this Update code//


/*
Block.defineBlock(255,"§aReinforced §3Planks", [["door",3]],false,false,false)
Block.setDestroyTime(255,1.5)
Item.addCraftRecipe(255,4,0,[5,5,0,280,4,0,0,0,0])
*/ //This feature isn't supported on 0.15.x

Block.defineBlock(253,"§9Command §4Block", [["command_block",0]],false,false,false)
Block.setDestroyTime(253,-1)

Block.defineBlock(254,"§6Polished §bTile", [["daylight_detector_side",0]],false,false,false)
Block.setDestroyTime(254,2)

		
function useItem (x, y, z,itemId, blockId, side)//useItem Code goes here
{
    if(itemId == 280)//If the item used is a stick
    {
        var custom =  Level.spawnMob(x,y+1,z,11,"mob/char.png"); //spawns mob, variable "custom", and uses the skin char
        Entity.setRenderType(custom,3); //changes the rendertype of the mob custom to a player
        clientMessage("§a§oYou have now Spawned a alien"); //clientmessage sent if item is a stick
    }
}//https://github.com/Connor4898/ModPE-Scripts/wiki/ModPE-Script-Templates


var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
///////
//////////functions

function mbd2(){
MBBamenu2.dismiss();
MBamenu2.dismiss();
}

function mb2(){
MBBaMenu2();
MBaMenu2();
}

//////////////////message board lay top

 function MBaMenu2(){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var MBaLayout = new android.widget.LinearLayout(ctx);
            var MBaScroll = new android.widget.ScrollView(ctx);
            var MBaLayout1 = new android.widget.LinearLayout(ctx);
            MBaLayout.setOrientation(1);
            MBaLayout1.setOrientation(1);

            MBaScroll.addView(MBaLayout);
            MBaLayout1.addView(MBaScroll);
	                  

var scrollText = new android.widget.TextView(ctx);
scrollText.setText("         Selamat datang "+ Player.getName(Player.getEntity()) +" ! This Mod has been remake by GoogleX ! -Thx");
scrollText.setTextSize(15);                                                                                  scrollText.setTextColor(android.graphics.Color.CYAN);

 
scrollText.setBackgroundDrawable(new android.graphics.drawable.GradientDrawable(android.graphics.drawable.GradientDrawable.Orientation.LEFT_RIGHT, [android.graphics.Color.BLACK, android.graphics.Color.TRANSPARENT, android.graphics.Color.BLACK]));

scrollText.setEllipsize(android.text.TextUtils.TruncateAt.MARQUEE);

scrollText.setMarqueeRepeatLimit(-1);
//
scrollText.setSingleLine();
scrollText.setHorizontallyScrolling(true);
scrollText.setSelected(true);
////////////
MBaLayout.addView(scrollText);



var cT31 = new android.widget.Button(ctx);
                cT31.setText("Tutup");
				cT31.setTextColor(android.graphics.Color.WHITE);
 cT31.getBackground().setColorFilter(android.graphics.Color.BLUE, android.graphics.PorterDuff.Mode.MULTIPLY);
 var display = new android.util.DisplayMetrics();
ctx.getWindowManager().getDefaultDisplay().getMetrics(display);
cT31.setLayoutParams(new android.widget.LinearLayout.LayoutParams(display.heightPixels / 4, display.heightPixels / 5));
cT31.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(view){
mbd2();
p11();

				}
}); 
MBaLayout.addView(cT31);

textview = android.widget.TextView(ctx);            textview.setText("Jika tidak bisa ditutup mohon reload BlockLauncher anda."); 
textview.setTextSize(20);                                                                                  textview.setTextColor(android.graphics.Color.GREEN);
textview.setBackgroundDrawable(new android.graphics.drawable.GradientDrawable(android.graphics.drawable.GradientDrawable.Orientation.LEFT_RIGHT, [android.graphics.Color.RED, android.graphics.Color.WHITE]));       

MBaLayout.addView(textview);
	                   MBamenu2 = new android.widget.PopupWindow(MBaLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth(), ctx.getWindowManager().getDefaultDisplay().getHeight()/1);
MBamenu2.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(125,99,0,0))); 
MBamenu2.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP , 0, 0);
        }catch(error){
            print("NoHA R FOUND " + error+"ERRORS");
        }
    }}));
}

/////////////////mb b

 function MBBaMenu2(){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var MBBaLayout = new android.widget.LinearLayout(ctx);
            var MBBaScroll = new android.widget.ScrollView(ctx);
            var MBBaLayout1 = new android.widget.LinearLayout(ctx);
            MBBaLayout.setOrientation(1);
            MBBaLayout1.setOrientation(1);

            MBBaScroll.addView(MBBaLayout);
            MBBaLayout1.addView(MBBaScroll);
	                  
	                  MBBamenu2 = new android.widget.PopupWindow(MBBaLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth(), ctx.getWindowManager().getDefaultDisplay().getHeight()/1);
MBBamenu2.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(125,0,0,125))); 
MBBamenu2.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.TOP , 0, 0);
        }catch(error){
            print("NoHA R FOUND " + error+"ERRORS");
        }
    }}));
}




//////////functions

function mbd(){
MBBamenu.dismiss();
MBamenu.dismiss();
}

function mb(){
MBBaMenu();
MBaMenu();
}

//////////////////message board lay top

 function MBaMenu(){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var MBaLayout = new android.widget.LinearLayout(ctx);
            var MBaScroll = new android.widget.ScrollView(ctx);
            var MBaLayout1 = new android.widget.LinearLayout(ctx);
            MBaLayout.setOrientation(1);
            MBaLayout1.setOrientation(1);

            MBaScroll.addView(MBaLayout);
            MBaLayout1.addView(MBaScroll);
	                  

var scrollText = new android.widget.TextView(ctx);
scrollText.setText("AJModsMCPE (Remake Edt)");
scrollText.setTextSize(8);                                                                                  scrollText.setTextColor(android.graphics.Color.CYAN);

 
scrollText.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

scrollText.setEllipsize(android.text.TextUtils.TruncateAt.MARQUEE);

scrollText.setMarqueeRepeatLimit(-1);
//
scrollText.setSingleLine();
scrollText.setHorizontallyScrolling(true);
scrollText.setSelected(true);
////////////
MBaLayout.addView(scrollText);


	                  MBamenu = new android.widget.PopupWindow(MBaLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth(), ctx.getWindowManager().getDefaultDisplay().getHeight()/25);
MBamenu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT)); 
            MBamenu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.TOP , 50, 0);
        }catch(error){
            print("Nha R FOUND " + error+"ERRORS");
        }
    }}));
}

/////////////////mb b

 function MBBaMenu(){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var MBBaLayout = new android.widget.LinearLayout(ctx);
            var MBBaScroll = new android.widget.ScrollView(ctx);
            var MBBaLayout1 = new android.widget.LinearLayout(ctx);
            MBBaLayout.setOrientation(1);
            MBBaLayout1.setOrientation(1);

            MBBaScroll.addView(MBBaLayout);
            MBBaLayout1.addView(MBBaScroll);
	                  
	                  MBBamenu = new android.widget.PopupWindow(MBBaLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth(), ctx.getWindowManager().getDefaultDisplay().getHeight()/45);
MBBamenu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT)); 
            MBBamenu.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.TOP , 50, 0);
        }catch(error){
            print("Nha R FOUND " + error+"ERRORS");
        }
    }}));
}
////////////

//////////extra menu

function mbd4(){
MBBamenu4.dismiss();
MBamenu4.dismiss();
}

function mb4(){
MBBaMenu4();
MBaMenu4();
}

//////////////////message board lay top

 function MBaMenu4(){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var MBaLayout = new android.widget.LinearLayout(ctx);
            var MBaScroll = new android.widget.ScrollView(ctx);
            var MBaLayout1 = new android.widget.LinearLayout(ctx);
            MBaLayout.setOrientation(1);
            MBaLayout1.setOrientation(1);

            MBaScroll.addView(MBaLayout);
            MBaLayout1.addView(MBaScroll);
	                  

var scrollText = new android.widget.TextView(ctx);
scrollText.setText("⚠Extra Menu⚠");
scrollText.setTextSize(15);                                                                                  scrollText.setTextColor(android.graphics.Color.CYAN);

 
scrollText.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

scrollText.setEllipsize(android.text.TextUtils.TruncateAt.MARQUEE);

scrollText.setMarqueeRepeatLimit(-1);
//
scrollText.setSingleLine();
scrollText.setHorizontallyScrolling(true);
scrollText.setSelected(true);
////////////
MBaLayout.addView(scrollText);



var cT33 = new android.widget.Button(ctx);
                cT33.setText("Tutup");
				cT33.setTextColor(BUTcurr);
           cT33.setTextSize(BUTsize); 
cT33.getBackground().setColorFilter(BUTcurr2, android.graphics.PorterDuff.Mode.MULTIPLY);
cT33.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(view){
mbd4();
Backmenu.dismiss();
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
LEFTmenu.dismiss();
RIGHTmenu.dismiss();
if(rain==true){
rainbow = false;
rain = false;
Backmenu.dismiss();
}else{
}
				}
}); 
MBaLayout.addView(cT33);

var bar1 = new android.widget.ProgressBar(ctx, null, android.R.attr.progressBarStyleHorizontal);
    bar1.setMax(100);
    bar1.setProgress(0);
   bar1.setBackgroundDrawable(new android.graphics.drawable.GradientDrawable(android.graphics.drawable.GradientDrawable.Orientation.LEFT_RIGHT, [android.graphics.Color.CYAN, android.graphics.Color.WHITE, android.graphics.Color.CYAN]));
MBaLayout.addView(bar1);

var cT73 = new android.widget.Button(ctx);
                cT73.setText("Pengaturan");
				cT73.setTextColor(BUTcurr);
           cT73.getBackground().setColorFilter(BUTcurr2, android.graphics.PorterDuff.Mode.MULTIPLY);
           cT73.setTextSize(BUTsize);
cT73.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(view){
mbd4()
mb12()
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

				}
}); 
MBaLayout.addView(cT73);

var cT361 = new android.widget.Button(ctx);
                cT361.setText("Setelan Pemutar Musik");
				cT361.setTextColor(BUTcurr);
           cT361.setTextSize(BUTsize);
cT361.getBackground().setColorFilter(BUTcurr2, android.graphics.PorterDuff.Mode.MULTIPLY);
cT361.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(view){
mbd4()
mb14()
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

				}
}); 
MBaLayout.addView(cT361);


var cT34 = new android.widget.Button(ctx);
                cT34.setText("Mods Utama");
				cT34.setTextColor(BUTcurr);
           cT34.setTextSize(BUTsize);
cT34.getBackground().setColorFilter(BUTcurr2, android.graphics.PorterDuff.Mode.MULTIPLY);
cT34.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(view){
mbd4()
mb5()
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

				}
}); 
MBaLayout.addView(cT34);



var cT74 = new android.widget.Button(ctx);
                cT74.setText("Tambah Item Ke Inventory");
				cT74.setTextColor(BUTcurr);
           cT74.setTextSize(BUTsize);
cT74.getBackground().setColorFilter(BUTcurr2, android.graphics.PorterDuff.Mode.MULTIPLY);
cT74.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(view){
tmiD();
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

				}
}); 
MBaLayout.addView(cT74);



var cT09 = new android.widget.Button(ctx);
                cT09.setText("Kustom Nama Mob");
				cT09.setTextColor(BUTcurr);
           cT09.setTextSize(BUTsize);
cT09.getBackground().setColorFilter(BUTcurr2, android.graphics.PorterDuff.Mode.MULTIPLY);
cT09.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(view){
CNameOpen();
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

				}
}); 
MBaLayout.addView(cT09);

var cT009 = new android.widget.Button(ctx);
                cT009.setText("Kustom Teleportasi");
				cT009.setTextColor(BUTcurr);
           cT009.setTextSize(BUTsize);
cT009.getBackground().setColorFilter(BUTcurr2, android.graphics.PorterDuff.Mode.MULTIPLY);
cT009.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(view){
initTeleportDialog();
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

				}
}); 
MBaLayout.addView(cT009);


var cT35 = new android.widget.Button(ctx);
                cT35.setText("Setelan Teleportasi");
				cT35.setTextColor(BUTcurr);
           cT35.setTextSize(BUTsize);
cT35.getBackground().setColorFilter(BUTcurr2, android.graphics.PorterDuff.Mode.MULTIPLY);
cT35.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(view){
mbd4()
mb6()
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

				}
}); 
MBaLayout.addView(cT35);



var cT36 = new android.widget.Button(ctx);
                cT36.setText("Setelan Untuk World");
				cT36.setTextColor(BUTcurr);
           cT36.setTextSize(BUTsize);
cT36.getBackground().setColorFilter(BUTcurr2, android.graphics.PorterDuff.Mode.MULTIPLY);
cT36.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(view){
mbd4()
mb7()
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

				}
}); 
MBaLayout.addView(cT36);



var cT37 = new android.widget.Button(ctx);
                cT37.setText("F-U-N");
				cT37.setTextColor(BUTcurr);
           cT37.setTextSize(BUTsize);
cT37.getBackground().setColorFilter(BUTcurr2, android.graphics.PorterDuff.Mode.MULTIPLY);
cT37.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(view){
mbd4()
mb8()
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

				}
}); 
MBaLayout.addView(cT37);

var cT38 = new android.widget.Button(ctx);
                cT38.setText("Info Player");
				cT38.setTextColor(BUTcurr);
           cT38.setTextSize(BUTsize);
cT38.getBackground().setColorFilter(BUTcurr2, android.graphics.PorterDuff.Mode.MULTIPLY);
cT38.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(view){
mbd4()
mb9()
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

				}
}); 
MBaLayout.addView(cT38);

var cT39 = new android.widget.Button(ctx);
                cT39.setText("Menu Pesan");
				cT39.setTextColor(BUTcurr);
           cT39.setTextSize(BUTsize);
cT39.getBackground().setColorFilter(BUTcurr2, android.graphics.PorterDuff.Mode.MULTIPLY);
cT39.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(view){
mbd4()
mb10()
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

				}
}); 
MBaLayout.addView(cT39);

var cT49 = new android.widget.Button(ctx);
                cT49.setText("Penyamaran");
				cT49.setTextColor(BUTcurr);
           cT49.setTextSize(BUTsize);
cT49.getBackground().setColorFilter(BUTcurr2, android.graphics.PorterDuff.Mode.MULTIPLY);
cT49.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(view){
mbd4()
mb11()
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

				}
}); 
MBaLayout.addView(cT49);

var cT100 = new android.widget.Button(ctx);
                cT100.setText("Menu Server");
				cT100.setTextColor(BUTcurr);
           cT100.setTextSize(BUTsize);
cT100.getBackground().setColorFilter(BUTcurr2, android.graphics.PorterDuff.Mode.MULTIPLY);
cT100.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(view){
mbd4()
mb13()
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

				}
}); 
MBaLayout.addView(cT100);


	                   MBamenu4 = new android.widget.PopupWindow(MBaLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/2, ctx.getWindowManager().getDefaultDisplay().getHeight());
MBamenu4.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(2,0,0,0))); 
            MBamenu4.showAtLocation(ctx.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
        }catch(error){
            print("AJMODSMCPE FOUND " + error+"ERRORS");
        }
    }}));
}

/////////////////mb b

 function MBBaMenu4(){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var MBBaLayout = new android.widget.LinearLayout(ctx);
            var MBBaScroll = new android.widget.ScrollView(ctx);
            var MBBaLayout1 = new android.widget.LinearLayout(ctx);
            MBBaLayout.setOrientation(1);
            MBBaLayout1.setOrientation(1);

            MBBaScroll.addView(MBBaLayout);
            MBBaLayout1.addView(MBBaScroll);
	                  
	                  MBBamenu4 = new android.widget.PopupWindow(MBBaLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/2, ctx.getWindowManager().getDefaultDisplay().getHeight());
MBBamenu4.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(2,0,0,0))); 
            MBBamenu4.showAtLocation(ctx.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
        }catch(error){
            print("AJMODSMCPE FOUND " + error+"ERRORS");
        }
    }}));
}

//////////Credit

function mbd3(){
MBBamenu3.dismiss();
MBamenu3.dismiss();
}

function mb3(){
MBBaMenu3();
MBaMenu3();
}

//////////////////message board lay top

 function MBaMenu3(){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var MBaLayout = new android.widget.LinearLayout(ctx);
            var MBaScroll = new android.widget.ScrollView(ctx);
            var MBaLayout1 = new android.widget.LinearLayout(ctx);
            MBaLayout.setOrientation(1);
            MBaLayout1.setOrientation(1);

            MBaScroll.addView(MBaLayout);
            MBaLayout1.addView(MBaScroll);
	                  

var scrollText = new android.widget.TextView(ctx);
scrollText.setText("This is remake version ! Credits To @AJModsMCPE");
scrollText.setTextSize(15);                                                                                  scrollText.setTextColor(android.graphics.Color.CYAN);

 
scrollText.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

scrollText.setEllipsize(android.text.TextUtils.TruncateAt.MARQUEE);

scrollText.setMarqueeRepeatLimit(-1);
//
scrollText.setSingleLine();
scrollText.setHorizontallyScrolling(true);
scrollText.setSelected(true);
////////////
MBaLayout.addView(scrollText);



var cT32 = new android.widget.Button(ctx);
                cT32.setText("Tutup");
				cT32.setTextColor(android.graphics.Color.BLACK);

cT32.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(view){
mbd3();
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

				}
}); 
MBaLayout.addView(cT32);

	                   MBamenu3 = new android.widget.PopupWindow(MBaLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/2, ctx.getWindowManager().getDefaultDisplay().getHeight());
MBamenu3.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(125,99,0,0))); 
            MBamenu3.showAtLocation(ctx.getWindow().getDecorView(),  GUIPos | Gravity.TOP, 0, 0);
        }catch(error){
            print("AJMODSMCPE FOUND " + error+"ERRORS");
        }
    }}));
}

/////////////////mb b

 function MBBaMenu3(){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var MBBaLayout = new android.widget.LinearLayout(ctx);
            var MBBaScroll = new android.widget.ScrollView(ctx);
            var MBBaLayout1 = new android.widget.LinearLayout(ctx);
            MBBaLayout.setOrientation(1);
            MBBaLayout1.setOrientation(1);

            MBBaScroll.addView(MBBaLayout);
            MBBaLayout1.addView(MBBaScroll);
	                  
	                  MBBamenu3 = new android.widget.PopupWindow(MBBaLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/2, ctx.getWindowManager().getDefaultDisplay().getHeight());
MBBamenu3.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(125,0,0,125))); 
            MBamenu3.showAtLocation(ctx.getWindow().getDecorView(),  GUIPos | Gravity.TOP, 0, 0);
        }catch(error){
            print("AJMODSMCPE FOUND " + error+"ERRORS");
        }
    }}));
}

//////////Main Mods

function mbd5(){
MBBamenu5.dismiss();
MBamenu5.dismiss();
}

function mb5(){
MBBaMenu5();
MBaMenu5();
}

//////////////////message board lay top

 function MBaMenu5(){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var MBaLayout = new android.widget.LinearLayout(ctx);
            var MBaScroll = new android.widget.ScrollView(ctx);
            var MBaLayout1 = new android.widget.LinearLayout(ctx);
            MBaLayout.setOrientation(1);
            MBaLayout1.setOrientation(1);

            MBaScroll.addView(MBaLayout);
            MBaLayout1.addView(MBaScroll);
	                  

var scrollText = new android.widget.TextView(ctx);
scrollText.setText("⚠Main Mods⚠");
scrollText.setTextSize(15);               
scrollText.setTextColor(android.graphics.Color.GREEN);
scrollText.setGravity(Gravity.CENTER);

 
scrollText.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

scrollText.setEllipsize(android.text.TextUtils.TruncateAt.MARQUEE);

scrollText.setMarqueeRepeatLimit(-1);
//
scrollText.setSingleLine();
scrollText.setHorizontallyScrolling(true);
scrollText.setSelected(true);
////////////
MBaLayout.addView(scrollText);



var cT41 = new android.widget.Button(ctx);
                cT41.setText("Kembali");
				cT41.setTextColor(BUTcurr);
           cT41.setTextSize(BUTsize);
cT41.getBackground().setColorFilter(BUTcurr2, android.graphics.PorterDuff.Mode.MULTIPLY);
cT41.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(view){
mbd5();
mb4()
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

				}
}); 
MBaLayout.addView(cT41);

var bar2 = new android.widget.ProgressBar(ctx, null, android.R.attr.progressBarStyleHorizontal);
    bar2.setMax(100);
    bar2.setProgress(0);
   bar2.setBackgroundDrawable(new android.graphics.drawable.GradientDrawable(android.graphics.drawable.GradientDrawable.Orientation.LEFT_RIGHT, [android.graphics.Color.CYAN, android.graphics.Color.WHITE, android.graphics.Color.CYAN]));
MBaLayout.addView(bar2);


var cT1 = new android.widget.Button(ctx);
                cT1.setText("Creative");
				cT1.setTextColor(BUTcurr);
           cT1.setTextSize(BUTsize);                cT1.getBackground().setColorFilter(BUTcurr2, android.graphics.PorterDuff.Mode.MULTIPLY);
           cT1.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(view){
				
				Level.setGameMode(1);

	Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
				}
}); 
MBaLayout.addView(cT1);

var cT18 = new android.widget.Button(ctx);
                cT18.setText("Inventory Creative Spesial");
				cT18.setTextColor(BUTcurr);
           cT18.setTextSize(BUTsize);                cT18.getBackground().setColorFilter(BUTcurr2, android.graphics.PorterDuff.Mode.MULTIPLY);
           cT18.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(view){
for(var j = 0; j < 500; j++) {
Player.addItemCreativeInv(j, 5, 0);
}
if(j==500)
android.widget.Toast.makeText(ctx,new android.text.Html.fromHtml("<b><font color=#FF3200>WARNING: </b><font color=#000000>Kau tidak bisa membuka prior inventory, Di mohon untuk reload BlockLauncher"),0).show();
android.widget.Toast.makeText(ctx,new android.text.Html.fromHtml("<b><font color=#FF3200>WARNING: </b><font color=#000000>Kau tidak bisa membuka prior inventory, Di mohon untuk reload BlockLauncher"),0).show();
android.widget.Toast.makeText(ctx,new android.text.Html.fromHtml("<b><font color=#FF3200>WARNING: </b><font color=#000000>Kau tidak bisa membuka prior inventory, Di mohon untuk reload BlockLauncher"),0).show();

Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
				}
}); 
MBaLayout.addView(cT18);

var cT2 = new android.widget.Button(ctx);
                cT2.setText("Survival");
				cT2.setTextColor(BUTcurr);
           cT2.setTextSize(BUTsize);                cT2.getBackground().setColorFilter(BUTcurr2, android.graphics.PorterDuff.Mode.MULTIPLY);
           cT2.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(viewarg){
Level.setGameMode(0);	Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
				}
}); 
MBaLayout.addView(cT2);

var cT3 = new android.widget.Button(ctx);
                cT3.setTextColor(BUTcurr);
           cT3.setTextSize(BUTsize);                cT3.getBackground().setColorFilter(BUTcurr2, android.graphics.PorterDuff.Mode.MULTIPLY);
           cT3.setText("99999999 XP");
                cT3.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(view){
				
				Player.setLevel(99999999);
				Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
				}
}); 
MBaLayout.addView(cT3);

var cT4 = new android.widget.Button(ctx);



var cT7 = new android.widget.Button(ctx);
                cT7.setText("Good Bye World~");
				cT7.setTextColor(BUTcurr);
cT7.getBackground().setColorFilter(BUTcurr2, android.graphics.PorterDuff.Mode.MULTIPLY);    
           cT7.setTextSize(BUTsize);                cT7.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(view){

Player.setHealth(0);
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
				}
}); 

MBaLayout.addView(cT7);

var cT8 = new android.widget.Button(ctx);
                cT8.setText("Kembalikan Darah");
				cT8.setTextColor(BUTcurr);
           cT8.setTextSize(BUTsize);                cT8.getBackground().setColorFilter(BUTcurr2, android.graphics.PorterDuff.Mode.MULTIPLY);
           cT8.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(view){

Player.setHealth(20);
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
				}
}); 

MBaLayout.addView(cT8);

var cT24 = new android.widget.Button(ctx);
                cT24.setText("Buang Semua Item Di Inventory");
				cT24.setTextColor(BUTcurr);
           cT24.setTextSize(BUTsize);
cT24.getBackground().setColorFilter(BUTcurr2, android.graphics.PorterDuff.Mode.MULTIPLY);          
           cT24.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(view){
            for(var i = 0; i < 50; i++)
       Player.clearInventorySlot(i);
    
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
				}
}); 
MBaLayout.addView(cT24);


	                   MBamenu5 = new android.widget.PopupWindow(MBaLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/2, ctx.getWindowManager().getDefaultDisplay().getHeight());
MBamenu5.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(2,0,0,0))); 
            MBamenu5.showAtLocation(ctx.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
        }catch(error){
            print("AJMODSMCPE FOUND " + error+"ERRORS");
        }
    }}));
}

/////////////////mb b

 function MBBaMenu5(){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var MBBaLayout = new android.widget.LinearLayout(ctx);
            var MBBaScroll = new android.widget.ScrollView(ctx);
            var MBBaLayout1 = new android.widget.LinearLayout(ctx);
            MBBaLayout.setOrientation(1);
            MBBaLayout1.setOrientation(1);

            MBBaScroll.addView(MBBaLayout);
            MBBaLayout1.addView(MBBaScroll);
	                  
	                  MBBamenu5 = new android.widget.PopupWindow(MBBaLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/2, ctx.getWindowManager().getDefaultDisplay().getHeight());
MBBamenu5.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(2,0,0,0))); 
            MBBamenu5.showAtLocation(ctx.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
        }catch(error){
            print("AJMODSMCPE FOUND " + error+"ERRORS");
        }
    }}));
}

//////////world op

function mbd7(){
MBBamenu7.dismiss();
MBamenu7.dismiss();
}

function mb7(){
MBBaMenu7();
MBaMenu7();
}

//////////////////message board lay top

 function MBaMenu7(){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var MBaLayout = new android.widget.LinearLayout(ctx);
            var MBaScroll = new android.widget.ScrollView(ctx);
            var MBaLayout1 = new android.widget.LinearLayout(ctx);
            MBaLayout.setOrientation(1);
            MBaLayout1.setOrientation(1);

            MBaScroll.addView(MBaLayout);
            MBaLayout1.addView(MBaScroll);
	                  

var scrollText = new android.widget.TextView(ctx);
scrollText.setText("⚠World Options⚠");
scrollText.setTextSize(15);      
scrollText.setTextColor(android.graphics.Color.RED);
scrollText.setGravity(Gravity.CENTER);

 
scrollText.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

scrollText.setEllipsize(android.text.TextUtils.TruncateAt.MARQUEE);

scrollText.setMarqueeRepeatLimit(-1);
//
scrollText.setSingleLine();
scrollText.setHorizontallyScrolling(true);
scrollText.setSelected(true);
////////////
MBaLayout.addView(scrollText);



var cT43 = new android.widget.Button(ctx);
                cT43.setText("Kembali");
                cT43.setTextColor(BUTcurr);
           cT43.setTextSize(BUTsize);				cT43.getBackground().setColorFilter(BUTcurr2, android.graphics.PorterDuff.Mode.MULTIPLY);
           cT43.setTextColor(android.graphics.Color.WHITE);

cT43.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(view){
mbd7();
mb4()
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

				}
}); 
MBaLayout.addView(cT43);

var bar3 = new android.widget.ProgressBar(ctx, null, android.R.attr.progressBarStyleHorizontal);
    bar3.setMax(100);
    bar3.setProgress(0);
   bar3.setBackgroundDrawable(new android.graphics.drawable.GradientDrawable(android.graphics.drawable.GradientDrawable.Orientation.LEFT_RIGHT, [android.graphics.Color.CYAN, android.graphics.Color.WHITE, android.graphics.Color.CYAN]));
MBaLayout.addView(bar3);


var cT9 = new android.widget.Button(ctx);
                cT9.setText("Jadikan Pagi");
				cT9.setTextColor(BUTcurr);
           cT9.setTextSize(BUTsize);                cT9.getBackground().setColorFilter(BUTcurr2, android.graphics.PorterDuff.Mode.MULTIPLY);
           cT9.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(view){
Level.setTime(0);
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
				}
}); 

MBaLayout.addView(cT9);

var cT10 = new android.widget.Button(ctx);
                cT10.setText("Jadikan Siang");
				cT10.setTextColor(BUTcurr);
           cT10.setTextSize(BUTsize);                
		   cT10.getBackground().setColorFilter(BUTcurr2, android.graphics.PorterDuff.Mode.MULTIPLY);
           cT10.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(view){
Level.setTime(6000);
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
				}
}); 

MBaLayout.addView(cT10);

var cT11 = new android.widget.Button(ctx);
                cT11.setText("Jadikan Malam");
				cT11.setTextColor(BUTcurr);
           cT11.setTextSize(BUTsize);                
		   cT11.getBackground().setColorFilter(BUTcurr2, android.graphics.PorterDuff.Mode.MULTIPLY);
           cT11.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(view){
Level.setTime(15000);
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
				}
}); 

MBaLayout.addView(cT11);

var cT12 = new android.widget.Button(ctx);
                cT12.setText("Reset Cuaca");
				cT12.setTextColor(BUTcurr);
           cT12.setTextSize(BUTsize);                cT12.getBackground().setColorFilter(BUTcurr2, android.graphics.PorterDuff.Mode.MULTIPLY);
           cT12.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(view){
Level.setRainLevel(0)
      Level.setLightningLevel(0);
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
				}
}); 

MBaLayout.addView(cT12);

var cT13 = new android.widget.Button(ctx);
                cT13.setText("Petir");
				cT13.setTextColor(BUTcurr);
           cT13.setTextSize(BUTsize);                
		   cT13.getBackground().setColorFilter(BUTcurr2, android.graphics.PorterDuff.Mode.MULTIPLY);
           cT13.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(view){
Level.setRainLevel(0)
      Level.setLightningLevel(1);
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
				}
}); 

MBaLayout.addView(cT13);

var cT14 = new android.widget.Button(ctx);
                cT14.setText("Hujan Tanpa Petir");
				cT14.setTextColor(BUTcurr);
           cT14.setTextSize(BUTsize);                
		   cT14.getBackground().setColorFilter(BUTcurr2, android.graphics.PorterDuff.Mode.MULTIPLY);
           cT14.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(view){
Level.setRainLevel(1);
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
				}
}); 

MBaLayout.addView(cT14);

var cTB01 = new android.widget.Button(ctx);
                cTB01.setText("Cuaca Ekstrim");
				cTB01.setTextColor(BUTcurr);
           cTB01.setTextSize(BUTsize);                
		   cTB01.getBackground().setColorFilter(BUTcurr2, android.graphics.PorterDuff.Mode.MULTIPLY);
           cTB01.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(view){
Level.setRainLevel(1)
      Level.setLightningLevel(1);
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
				}
}); 

MBaLayout.addView(cTB01);

	                   MBamenu7 = new android.widget.PopupWindow(MBaLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/2, ctx.getWindowManager().getDefaultDisplay().getHeight());
MBamenu7.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(2,0,0,0))); 
            MBamenu7.showAtLocation(ctx.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
        }catch(error){
            print("AJMODSMCPE FOUND " + error+"ERRORS");
        }
    }}));
}

/////////////////mb b

 function MBBaMenu7(){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var MBBaLayout = new android.widget.LinearLayout(ctx);
            var MBBaScroll = new android.widget.ScrollView(ctx);
            var MBBaLayout1 = new android.widget.LinearLayout(ctx);
            MBBaLayout.setOrientation(1);
            MBBaLayout1.setOrientation(1);

            MBBaScroll.addView(MBBaLayout);
            MBBaLayout1.addView(MBBaScroll);
	                  
	                  MBBamenu7 = new android.widget.PopupWindow(MBBaLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/2, ctx.getWindowManager().getDefaultDisplay().getHeight());
MBBamenu7.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(2,0,0,0))); 
            MBBamenu7.showAtLocation(ctx.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
        }catch(error){
            print("AJMODSMCPE FOUND " + error+"ERRORS");
        }
    }}));
}

//////////tele op

function mbd6(){
MBBamenu6.dismiss();
MBamenu6.dismiss();
}

function mb6(){
MBBaMenu6();
MBaMenu6();
}

//////////////////message board lay top

 function MBaMenu6(){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var MBaLayout = new android.widget.LinearLayout(ctx);
            var MBaScroll = new android.widget.ScrollView(ctx);
            var MBaLayout1 = new android.widget.LinearLayout(ctx);
            MBaLayout.setOrientation(1);
            MBaLayout1.setOrientation(1);

            MBaScroll.addView(MBaLayout);
            MBaLayout1.addView(MBaScroll);
	                  

var scrollText = new android.widget.TextView(ctx);
scrollText.setText("⚠Teleport Options⚠");
scrollText.setTextSize(15);            
scrollText.setTextColor(android.graphics.Color.BLACK);
scrollText.setGravity(Gravity.CENTER);

 
scrollText.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

scrollText.setEllipsize(android.text.TextUtils.TruncateAt.MARQUEE);

scrollText.setMarqueeRepeatLimit(-1);
//
scrollText.setSingleLine();
scrollText.setHorizontallyScrolling(true);
scrollText.setSelected(true);
////////////
MBaLayout.addView(scrollText);



var cT42 = new android.widget.Button(ctx);
                cT42.setText("Kembali");
				cT42.setTextColor(BUTcurr);
           cT42.setTextSize(BUTsize);
cT42.getBackground().setColorFilter(BUTcurr2, android.graphics.PorterDuff.Mode.MULTIPLY);
cT42.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(view){
mbd6();
mb4()
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

				}
}); 
MBaLayout.addView(cT42);

var bar4 = new android.widget.ProgressBar(ctx, null, android.R.attr.progressBarStyleHorizontal);
    bar4.setMax(100);
    bar4.setProgress(0);
   bar4.setBackgroundDrawable(new android.graphics.drawable.GradientDrawable(android.graphics.drawable.GradientDrawable.Orientation.LEFT_RIGHT, [android.graphics.Color.CYAN, android.graphics.Color.WHITE, android.graphics.Color.CYAN]));
MBaLayout.addView(bar4);


var cT6 = new android.widget.Button(ctx);
                cT6.setText("Set Spawn");
				cT6.setTextColor(BUTcurr);
           cT6.setTextSize(BUTsize);
cT6.getBackground().setColorFilter(BUTcurr2, android.graphics.PorterDuff.Mode.MULTIPLY);                cT6.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(view){
clientMessage("Tempat spawn telah disetel pada: \n§4x: " + Math.floor(Player.getX()) + " §4y: " + Math.floor(Player.getY() - 1) + " §4z: " + Math.floor(Player.getZ()));
Level.setSpawn(getPlayerX(), getPlayerY(), getPlayerZ());
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
				}
}); 
MBaLayout.addView(cT6);

var cT20 = new android.widget.Button(ctx);
                cT20.setText("Set Home");
				cT20.setTextColor(BUTcurr);
           cT20.setTextSize(BUTsize);
cT20.getBackground().setColorFilter(BUTcurr2, android.graphics.PorterDuff.Mode.MULTIPLY);                cT20.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(view){
clientMessage("Tempat rumah telah disetel pada: \n§4x: " + Math.floor(Player.getX()) + " §4y: " + Math.floor(Player.getY() - 1) + " §4z: " + Math.floor(Player.getZ()));
ModPE.saveData("hX",parseInt(Player.getX()));			ModPE.saveData("hY",parseInt(Player.getY()));			ModPE.saveData("hZ",parseInt(Player.getZ()));
ModPE.saveData("setHomeData",1);
android.widget.Toast.makeText(ctx,new android.text.Html.fromHtml("<b><font color=#FF3200>WARNING: </b><font color=#000000>Saat kamu teleportasi ke rumah saat pertama kali maka MCPE anda akan crash ! Tapi hanya pada saat pertama kali"),0).show();
android.widget.Toast.makeText(ctx,new android.text.Html.fromHtml("<b><font color=#FF3200>WARNING: </b><font color=#000000>Saat kamu teleportasi ke rumah saat pertama kali maka MCPE anda akan crash ! Tapi hanya pada saat pertama kali"),0).show();
android.widget.Toast.makeText(ctx,new android.text.Html.fromHtml("<b><font color=#FF3200>WARNING: </b><font color=#000000>Saat kamu teleportasi ke rumah saat pertama kali maka MCPE anda akan crash ! Tapi hanya pada saat pertama kali"),0).show();
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

				}
});
MBaLayout.addView(cT20);

var cT21 = new android.widget.Button(ctx);
                cT21.setText("Teleportasi ke rumah");
				cT21.setTextColor(BUTcurr);
           cT21.setTextSize(BUTsize);
cT21.getBackground().setColorFilter(BUTcurr2, android.graphics.PorterDuff.Mode.MULTIPLY);                cT21.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(view){
clientMessage("§4Tadaaaa §4!");
Entity.setPosition(Player.getEntity(), parseInt(ModPE.readData("hX")) + 0.5, parseInt(ModPE.readData("hY")) + 1.5, parseInt(ModPE.readData("hZ")) + 0.5);
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
				}
}); 
MBaLayout.addView(cT21);

var cT75 = new android.widget.Button(ctx);
                cT75.setText("Teleportasi sesuai koordinat");
				cT75.setTextColor(BUTcurr);
           cT75.setTextSize(BUTsize);
cT75.getBackground().setColorFilter(BUTcurr2, android.graphics.PorterDuff.Mode.MULTIPLY);
cT75.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(view){
teleportation();
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

				}
}); 
MBaLayout.addView(cT75);

var cT00 = new android.widget.Button(ctx);
                cT00.setText("Teleportasi ke tempat anda mati");
				cT00.setTextColor(BUTcurr);
           cT00.setTextSize(BUTsize);
cT00.getBackground().setColorFilter(BUTcurr2, android.graphics.PorterDuff.Mode.MULTIPLY);
cT00.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(view){
ppx = ModPE.readData("x_pD_" + Level.getWorldDir());

ppy = ModPE.readData("y_pD_" + Level.getWorldDir());

ppz = ModPE.readData("z_pD_" + Level.getWorldDir());

pDOpen();
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

				}
}); 
MBaLayout.addView(cT00);

	                   MBamenu6 = new android.widget.PopupWindow(MBaLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/2, ctx.getWindowManager().getDefaultDisplay().getHeight());
MBamenu6.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(2,0,0,0))); 
            MBamenu6.showAtLocation(ctx.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
        }catch(error){
            print("AJMODSMCPE FOUND " + error+"ERRORS");
        }
    }}));
}

/////////////////mb b

 function MBBaMenu6(){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var MBBaLayout = new android.widget.LinearLayout(ctx);
            var MBBaScroll = new android.widget.ScrollView(ctx);
            var MBBaLayout1 = new android.widget.LinearLayout(ctx);
            MBBaLayout.setOrientation(1);
            MBBaLayout1.setOrientation(1);

            MBBaScroll.addView(MBBaLayout);
            MBBaLayout1.addView(MBBaScroll);
	                  
	                  MBBamenu6 = new android.widget.PopupWindow(MBBaLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/2, ctx.getWindowManager().getDefaultDisplay().getHeight());
MBBamenu6.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(2,0,0,0))); 
            MBBamenu6.showAtLocation(ctx.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
        }catch(error){
            print("AJMODSMCPE FOUND " + error+"ERRORS");
        }
    }}));
}

//////////fun

function mbd8(){
MBBamenu8.dismiss();
MBamenu8.dismiss();
}

function mb8(){
MBBaMenu8();
MBaMenu8();
}

//////////////////message board lay top

 function MBaMenu8(){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var MBaLayout = new android.widget.LinearLayout(ctx);
            var MBaScroll = new android.widget.ScrollView(ctx);
            var MBaLayout1 = new android.widget.LinearLayout(ctx);
            MBaLayout.setOrientation(1);
            MBaLayout1.setOrientation(1);

            MBaScroll.addView(MBaLayout);
            MBaLayout1.addView(MBaScroll);
	                  

var scrollText = new android.widget.TextView(ctx);
scrollText.setText("⚠Fun Mods⚠");
scrollText.setTextSize(15);                                                                                  
scrollText.setTextColor(android.graphics.Color.MAGENTA);
scrollText.setGravity(Gravity.CENTER);


 
scrollText.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

scrollText.setEllipsize(android.text.TextUtils.TruncateAt.MARQUEE);

scrollText.setMarqueeRepeatLimit(-1);
//
scrollText.setSingleLine();
scrollText.setHorizontallyScrolling(true);
scrollText.setSelected(true);
////////////
MBaLayout.addView(scrollText);



var cT44 = new android.widget.Button(ctx);
                cT44.setText("Kembali");
				cT44.setTextColor(BUTcurr);
           cT44.setTextSize(BUTsize);
cT44.getBackground().setColorFilter(BUTcurr2, android.graphics.PorterDuff.Mode.MULTIPLY);
cT44.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(view){
mbd8();
mb4()
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

				}
}); 
MBaLayout.addView(cT44);

var bar5 = new android.widget.ProgressBar(ctx, null, android.R.attr.progressBarStyleHorizontal);
    bar5.setMax(100);
    bar5.setProgress(0);
   bar5.setBackgroundDrawable(new android.graphics.drawable.GradientDrawable(android.graphics.drawable.GradientDrawable.Orientation.LEFT_RIGHT, [android.graphics.Color.CYAN, android.graphics.Color.WHITE, android.graphics.Color.CYAN]));
MBaLayout.addView(bar5);


var cT15 = new android.widget.Button(ctx);
                cT15.setText("Meluncur dan pergi");
				cT15.setTextColor(BUTcurr);
           cT15.setTextSize(BUTsize);
cT15.getBackground().setColorFilter(BUTcurr2, android.graphics.PorterDuff.Mode.MULTIPLY);                cT15.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(view){
setVelX(getPlayerEnt(), 5);
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
				}
}); 

MBaLayout.addView(cT15);

var cT16 = new android.widget.Button(ctx);
                cT16.setText("Free Fall");
				cT16.setTextColor(BUTcurr);
           cT16.setTextSize(BUTsize);
cT16.getBackground().setColorFilter(BUTcurr2, android.graphics.PorterDuff.Mode.MULTIPLY);                cT16.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(view){

setVelY(getPlayerEnt(), 9);
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
				}
}); 


MBaLayout.addView(cT16);


var cT5 = new android.widget.Button(ctx);
                cT5.setText("Spawn A Growing Star");
				cT5.setTextColor(BUTcurr);
           cT5.setTextSize(BUTsize);
cT5.getBackground().setColorFilter(BUTcurr2, android.graphics.PorterDuff.Mode.MULTIPLY);                cT5.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(view){
Level.addParticle(ParticleType.crit, getPlayerX(), getPlayerY(), getPlayerZ(), 0, 0, 0, 150);
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
				}
}); 
MBaLayout.addView(cT5);

var cT23 = new android.widget.Button(ctx);
                cT23.setText("Modded Blocks Kit");
				cT23.setTextColor(BUTcurr);
           cT23.setTextSize(BUTsize);
cT23.getBackground().setColorFilter(BUTcurr2, android.graphics.PorterDuff.Mode.MULTIPLY);                cT23.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(view){
clientMessage("Pesanan telah dikirim ke "+ Player.getName(Player.getEntity()) +" !");
addItemInventory(255,255,0)
      	 
      addItemInventory(254,255,0)
      addItemInventory(253,255,0)
      
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
				}
}); 
MBaLayout.addView(cT23);


var cT19 = new android.widget.Button(ctx);
                cT19.setText("Glitched Blocks Kit");
				cT19.setTextColor(BUTcurr);
           cT19.setTextSize(BUTsize);
cT19.getBackground().setColorFilter(BUTcurr2, android.graphics.PorterDuff.Mode.MULTIPLY);                cT19.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(view){
clientMessage("Pesanan telah dikirim ke §4"+ Player.getName(Player.getEntity()) +" !");
addItemInventory(383,255,0) 
      	addItemInventory(162,255,15)
      	addItemInventory(246,255,0)
      	addItemInventory(198,255,0);
      	addItemInventory(9,255,0);
      addItemInventory(11,255,0);
      	addItemInventory(124,255,0);
      	addItemInventory(94,255,0);
      	addItemInventory(90,255,0);
      	addItemInventory(196,255,0);
      addItemInventory(51,255,0);
      	addItemInventory(249,255,0);
      	addItemInventory(26,255,0);
      	addItemInventory(144,255,0);
      	addItemInventory(68,255,0);
      	addItemInventory(247,255,0);
      	addItemInventory(403,255,0);
      	addItemInventory(439,255,0);
      	addItemInventory(95,255,0);
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
				}
}); 
MBaLayout.addView(cT19);


var cT22 = new android.widget.Button(ctx);
                cT22.setText("Perbanyak jumlah item di slot");
				cT22.setTextColor(BUTcurr);
           cT22.setTextSize(BUTsize);
cT22.getBackground().setColorFilter(BUTcurr2, android.graphics.PorterDuff.Mode.MULTIPLY);                cT22.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(view){
clientMessage("§4Bimsalabim!");
addItemInventory(getCarriedItem(),255,Player.getCarriedItemData());
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
		}
});	 
MBaLayout.addView(cT22);

var cT47 = new android.widget.Button(ctx);
                cT47.setText("A Magical Wand");
				cT47.setTextColor(BUTcurr);
           cT47.setTextSize(BUTsize);
cT47.getBackground().setColorFilter(BUTcurr2, android.graphics.PorterDuff.Mode.MULTIPLY);
cT47.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(view){
addItemInventory(431,255,0);
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

				}
}); 
MBaLayout.addView(cT47);


var cT25 = new android.widget.Button(ctx);
                cT25.setText("Uang jatuh");
				cT25.setTextColor(BUTcurr);
           cT25.setTextSize(BUTsize);
cT25.getBackground().setColorFilter(BUTcurr2, android.graphics.PorterDuff.Mode.MULTIPLY);
cT25.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(view){


 var x = Player.getPointedBlockX();
var y = Player.getPointedBlockY()+1;
var z = Player.getPointedBlockZ();

 Level.dropItem(x,y+5,z,0,264,10);
		Level.dropItem(x-1,y+5,z,0,264,5);
		Level.dropItem(x-1,y+5,z+1,0,264,5);
		Level.dropItem(x,y+5,z-1,0,264,5);
		Level.dropItem(x,y+5,z+1,0,264,5);
		Level.dropItem(x-1,y+5,z-1,0,264,5);
		Level.dropItem(x+1,y+5,z+1,0,264,5);
		Level.dropItem(x+1,y+5,z,0,264,5);
		Level.dropItem(x+1,y+5,z+1,0,264,5); 

android.widget.Toast.makeText(ctx,new android.text.Html.fromHtml("<font color=#00FF21>Klik block mana saja!"),0).show();
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
				}
}); 
MBaLayout.addView(cT25);

textview = android.widget.TextView(ctx);            textview.setText("Tunjukan FPS"); 
textview.setTextSize(10);                                                                                  textview.setTextColor(android.graphics.Color.MAGENTA);
textview.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       

MBaLayout.addView(textview);

var button10 = new android.widget.ToggleButton(ctx);
button10.setText("FPS");
button10.getBackground().setColorFilter(BUTcurr2, android.graphics.PorterDuff.Mode.MULTIPLY);
button10.setChecked(toggled1);
button10.setOnClickListener(new android.view.View.OnClickListener({
    onClick: function(viewarg){
        if(!toggled1){
            toggled1 = true;
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
        }else{
            toggled1 = false;

}
}
}));
MBaLayout.addView(button10);
	                   MBamenu8 = new android.widget.PopupWindow(MBaLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/2, ctx.getWindowManager().getDefaultDisplay().getHeight());
MBamenu8.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(2,0,0,0))); 
            MBamenu8.showAtLocation(ctx.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
        }catch(error){
            print("AJMODSMCPE FOUND " + error+"ERRORS");
        }
    }}));
}

/////////////////mb b

 function MBBaMenu8(){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var MBBaLayout = new android.widget.LinearLayout(ctx);
            var MBBaScroll = new android.widget.ScrollView(ctx);
            var MBBaLayout1 = new android.widget.LinearLayout(ctx);
            MBBaLayout.setOrientation(1);
            MBBaLayout1.setOrientation(1);

            MBBaScroll.addView(MBBaLayout);
            MBBaLayout1.addView(MBBaScroll);
	                  
	                  MBBamenu8 = new android.widget.PopupWindow(MBBaLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/2, ctx.getWindowManager().getDefaultDisplay().getHeight());
MBBamenu8.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(2,0,0,0))); 
            MBBamenu8.showAtLocation(ctx.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
        }catch(error){
            print("AJMODSMCPE FOUND " + error+"ERRORS");
        }
    }}));
}

//////////Info

function mbd9(){
MBBamenu9.dismiss();
MBamenu9.dismiss();
}

function mb9(){
MBBaMenu9();
MBaMenu9();
}

//////////////////message board lay top

 function MBaMenu9(){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var MBaLayout = new android.widget.LinearLayout(ctx);
            var MBaScroll = new android.widget.ScrollView(ctx);
            var MBaLayout1 = new android.widget.LinearLayout(ctx);
            MBaLayout.setOrientation(1);
            MBaLayout1.setOrientation(1);

            MBaScroll.addView(MBaLayout);
            MBaLayout1.addView(MBaScroll);
	                  

var scrollText = new android.widget.TextView(ctx);
scrollText.setText("⚠"+ Player.getName(Player.getEntity()) +" Info⚠");
scrollText.setTextSize(15);                                                                                  
scrollText.setTextColor(android.graphics.Color.YELLOW);
scrollText.setGravity(Gravity.CENTER);


 
scrollText.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

scrollText.setEllipsize(android.text.TextUtils.TruncateAt.MARQUEE);

scrollText.setMarqueeRepeatLimit(-1);
//
scrollText.setSingleLine();
scrollText.setHorizontallyScrolling(true);
scrollText.setSelected(true);
////////////
MBaLayout.addView(scrollText);



var cT45 = new android.widget.Button(ctx);
                cT45.setText("Kembali");
				cT45.setTextColor(BUTcurr);
           cT45.setTextSize(BUTsize);
cT45.getBackground().setColorFilter(BUTcurr2, android.graphics.PorterDuff.Mode.MULTIPLY);
cT45.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(view){
mbd9();
mb4()
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

				}
}); 
MBaLayout.addView(cT45);

var bar6 = new android.widget.ProgressBar(ctx, null, android.R.attr.progressBarStyleHorizontal);
    bar6.setMax(100);
    bar6.setProgress(0);
   bar6.setBackgroundDrawable(new android.graphics.drawable.GradientDrawable(android.graphics.drawable.GradientDrawable.Orientation.LEFT_RIGHT, [android.graphics.Color.CYAN, android.graphics.Color.WHITE, android.graphics.Color.CYAN]));
MBaLayout.addView(bar6);


textview = android.widget.TextView(ctx);            textview.setText("Item ID: " + Player.getCarriedItem() + ":" + Player.getCarriedItemData() + "\nNama: " + Player.getName(Player.getEntity()) +"\nDarah: "+Entity.getHealth(getPlayerEnt())+"/20\nNama World: "+Level.getWorldName()+"\nWaktu: "+Level.getTime()+"\nGamemode: " +Level.getGameMode()+"\nPosisi sekarang:\nx " + Math.round(Player.getX())+" y "+Math.round(Player.getY())+" z "+Math.round(Player.getZ()) + "\nRain/Lightning: " + Math.round(Level.getRainLevel()) + "/" + Math.round(Level.getLightningLevel()) + "\nVersi Minecraft " + ModPE.getMinecraftVersion() + "\nBiome: " + Level.getBiomeName());
textview.setTextSize(15);                                                                                  textview.setTextColor(android.graphics.Color.YELLOW);
textview.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       MBaLayout.addView(textview);
	                   MBamenu9 = new android.widget.PopupWindow(MBaLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/2, ctx.getWindowManager().getDefaultDisplay().getHeight());
MBamenu9.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(2,0,0,0))); 
            MBamenu9.showAtLocation(ctx.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
        }catch(error){
            print("AJMODSMCPE FOUND " + error+"ERRORS");
        }
    }}));
}

/////////////////mb b

 function MBBaMenu9(){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var MBBaLayout = new android.widget.LinearLayout(ctx);
            var MBBaScroll = new android.widget.ScrollView(ctx);
            var MBBaLayout1 = new android.widget.LinearLayout(ctx);
            MBBaLayout.setOrientation(1);
            MBBaLayout1.setOrientation(1);

            MBBaScroll.addView(MBBaLayout);
            MBBaLayout1.addView(MBBaScroll);
	                  
	                  MBBamenu9 = new android.widget.PopupWindow(MBBaLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/2, ctx.getWindowManager().getDefaultDisplay().getHeight());
MBBamenu9.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(2,0,0,0))); 
            MBBamenu9.showAtLocation(ctx.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
        }catch(error){
            print("AJMODSMCPE FOUND " + error+"ERRORS");
        }
    }}));
}

//////////msg

function mbd10(){
MBBamenu10.dismiss();
MBamenu10.dismiss();
}

function mb10(){
MBBaMenu10();
MBaMenu10();
}

//////////////////message board lay top

 function MBaMenu10(){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var MBaLayout = new android.widget.LinearLayout(ctx);
            var MBaScroll = new android.widget.ScrollView(ctx);
            var MBaLayout1 = new android.widget.LinearLayout(ctx);
            MBaLayout.setOrientation(1);
            MBaLayout1.setOrientation(1);

            MBaScroll.addView(MBaLayout);
            MBaLayout1.addView(MBaScroll);
	                  

var scrollText = new android.widget.TextView(ctx);
scrollText.setText("⚠Message Menu⚠");
scrollText.setTextSize(15);                                                                                  
scrollText.setTextColor(android.graphics.Color.BLUE);
scrollText.setGravity(Gravity.CENTER);


 
scrollText.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

scrollText.setEllipsize(android.text.TextUtils.TruncateAt.MARQUEE);

scrollText.setMarqueeRepeatLimit(-1);
//
scrollText.setSingleLine();
scrollText.setHorizontallyScrolling(true);
scrollText.setSelected(true);
////////////
MBaLayout.addView(scrollText);



var cT46 = new android.widget.Button(ctx);
                cT46.setText("Kembali");
				cT46.setTextColor(BUTcurr);
cT46.getBackground().setColorFilter(BUTcurr2, android.graphics.PorterDuff.Mode.MULTIPLY);           cT46.setTextSize(BUTsize);

cT46.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(view){
mbd10();
mb4()
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

				}
}); 
MBaLayout.addView(cT46);

var bar7 = new android.widget.ProgressBar(ctx, null, android.R.attr.progressBarStyleHorizontal);
    bar7.setMax(100);
    bar7.setProgress(0);
   bar7.setBackgroundDrawable(new android.graphics.drawable.GradientDrawable(android.graphics.drawable.GradientDrawable.Orientation.LEFT_RIGHT, [android.graphics.Color.CYAN, android.graphics.Color.WHITE, android.graphics.Color.CYAN]));
MBaLayout.addView(bar7);

var zmenuDot = new android.widget.LinearLayout(ctx);
	 zmenuDot.setOrientation(0);

var editab = new android.widget.EditText(ctx);
var button = new android.widget.Switch(ctx);

editab.setHint("Masukan text untuk spam");
editab.setOnClickListener(new android.view.View.OnClickListener() {
			onClick: function(v){
spa(); 
			}
		});

     
      var button = new android.widget.Switch(ctx);
      button.setChecked(switched);
      button.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!switched){
      switched = true;

sspam = true;
      }else{
      switched = false;

 sspam = false;
      }
      button.setChecked(switched);
      }
      }));
     
     zmenuDot.addView(editab);
     zmenuDot.addView(button);

MBaLayout.addView(zmenuDot);

function spa() {
ctx.runOnUiThread(new java.lang.Runnable(){
run: function(){ 
try{
spa = new android.widget.PopupWindow();
var Layer6 = new android.widget.LinearLayout(ctx);
var mm = new android.widget.EditText(ctx);
var Dialog = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialog.setTitle("Masukan text untuk spam");
Dialog.setContentView(Layer6);

Layer6.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialog.show();
Layer6.addView(mm);
Layer6.addView(Exit);

mm.setText("AJModsMCPE Remake version!");
Exit.setText("Selesai");

Exit.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(view){
text =mm.getText();
Dialog.dismiss();
}
});

spa.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
spa.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
spa.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP, 0, 0);
} catch (e){
print("Spam tidak berfungsi karna:"+e);
}
}});
}

var button45 = new android.widget.Switch(ctx);
button45.setText("Clear The Chat With Love (Everyone Can see)");
button45.setTextColor(BUTcurr);
           button45.setTextSize(BUTsize);button45.setChecked(switched45);
button45.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged:
function(){
if(switched45 == false) {
switched45 = true;
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
}else if(switched45 == true){
switched45 = false;
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
}
}
}));
MBaLayout.addView(button45)



var button47 = new android.widget.Switch(ctx);
button47.setText("Matikan obrolan (Hanya kau yang bisa lihat)");
button47.setTextColor(BUTcurr);
           button47.setTextSize(BUTsize);button47.setChecked(switched47);
button47.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged:
function(){
if(switched47 == false) {
switched47 = true;
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
}else if(switched47 == true){
switched47 = false;
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
}
}
}));
MBaLayout.addView(button47)

	                   MBamenu10 = new android.widget.PopupWindow(MBaLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/2, ctx.getWindowManager().getDefaultDisplay().getHeight());
MBamenu10.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(2,0,0,0))); 
            MBamenu10.showAtLocation(ctx.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
        }catch(error){
            print("AJMODSMCPE FOUND " + error+"ERRORS");
        }
    }}));
}

/////////////////mb b

 function MBBaMenu10(){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var MBBaLayout = new android.widget.LinearLayout(ctx);
            var MBBaScroll = new android.widget.ScrollView(ctx);
            var MBBaLayout1 = new android.widget.LinearLayout(ctx);
            MBBaLayout.setOrientation(1);
            MBBaLayout1.setOrientation(1);

            MBBaScroll.addView(MBBaLayout);
            MBBaLayout1.addView(MBBaScroll);
	                  
	                  MBBamenu10 = new android.widget.PopupWindow(MBBaLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/2, ctx.getWindowManager().getDefaultDisplay().getHeight());
MBBamenu10.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(2,0,0,0))); 
            MBBamenu10.showAtLocation(ctx.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
        }catch(error){
            print("AJMODSMCPE FOUND " + error+"ERRORS");
        }
    }}));
}

//////////morph

function mbd11(){
MBBamenu11.dismiss();
MBamenu11.dismiss();
}

function mb11(){
MBBaMenu11();
MBaMenu11();
}

//////////////////message board lay top

 function MBaMenu11(){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var MBaLayout = new android.widget.LinearLayout(ctx);
            var MBaScroll = new android.widget.ScrollView(ctx);
            var MBaLayout1 = new android.widget.LinearLayout(ctx);
            MBaLayout.setOrientation(1);
            MBaLayout1.setOrientation(1);

            MBaScroll.addView(MBaLayout);
            MBaLayout1.addView(MBaScroll);
	                  

var scrollText = new android.widget.TextView(ctx);
scrollText.setText("⚠Morph Menu⚠");
scrollText.setTextSize(15);                                                                                  
scrollText.setTextColor(android.graphics.Color.GREEN);
scrollText.setGravity(Gravity.CENTER);


 
scrollText.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

scrollText.setEllipsize(android.text.TextUtils.TruncateAt.MARQUEE);

scrollText.setMarqueeRepeatLimit(-1);
//
scrollText.setSingleLine();
scrollText.setHorizontallyScrolling(true);
scrollText.setSelected(true);
////////////
MBaLayout.addView(scrollText);



var cT48 = new android.widget.Button(ctx);

cT48.setText("Kembali");

cT48.setTextColor(BUTcurr);

cT48.setTextSize(BUTsize);
cT48.getBackground().setColorFilter(BUTcurr2, android.graphics.PorterDuff.Mode.MULTIPLY);
cT48.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(view){
mbd11();
mb4()
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

				}
}); 
MBaLayout.addView(cT48);

var bar8 = new android.widget.ProgressBar(ctx, null, android.R.attr.progressBarStyleHorizontal);
    bar8.setMax(100);
    bar8.setProgress(0);
   bar8.setBackgroundDrawable(new android.graphics.drawable.GradientDrawable(android.graphics.drawable.GradientDrawable.Orientation.LEFT_RIGHT, [android.graphics.Color.CYAN, android.graphics.Color.WHITE, android.graphics.Color.CYAN]));
MBaLayout.addView(bar8);


var cT50 = new android.widget.Button(ctx);
                cT50.setText("Set Arrow");
                cT50.setTextColor(BUTcurr);
           cT50.setTextSize(BUTsize);				cT50.getBackground().setColorFilter(BUTcurr2, android.graphics.PorterDuff.Mode.MULTIPLY);
cT50.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(view){
Entity.setCollisionSize(Player.getEntity(), 0.5, 0.5);
			Entity.setRenderType(Player.getEntity(), EntityRenderType.arrow);
			Entity.setMobSkin(Player.getEntity(),"mob/arrow.png");

Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

				}
}); 
MBaLayout.addView(cT50);
/*
var cT51 = new android.widget.Button(ctx);
                cT51.setText("Set Lightning");
				cT51.setTextColor(BUTcurr);
           cT51.setTextSize(BUTsize);
cT51.getBackground().setColorFilter(BUTcurr2, android.graphics.PorterDuff.Mode.MULTIPLY);
cT51.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(view){
Entity.setCollisionSize(Player.getEntity(), 0.1, 0.1);
			Entity.setRenderType(Player.getEntity(), EntityRenderType.lightningBolt);
			Entity.setMobSkin(Player.getEntity(),"mob/lightningBolt.png");
ModPE.resetFov();
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

				}
}); 
MBaLayout.addView(cT51);
*/
var cT52 = new android.widget.Button(ctx);
                cT52.setText("Set Camera");
				cT52.setTextColor(BUTcurr);
           cT52.setTextSize(BUTsize);
cT52.getBackground().setColorFilter(BUTcurr2, android.graphics.PorterDuff.Mode.MULTIPLY);
cT52.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(view){
Entity.setCollisionSize(Player.getEntity(), 0.9, 0.8);
			Entity.setRenderType(Player.getEntity(), EntityRenderType.camera);
			Entity.setMobSkin(Player.getEntity(),"mob/camera.png");

Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

				}
}); 
MBaLayout.addView(cT52);

var cT53 = new android.widget.Button(ctx);
                cT53.setText("Set Player");
				cT53.setTextColor(BUTcurr);
           cT53.setTextSize(BUTsize);
cT53.getBackground().setColorFilter(BUTcurr2, android.graphics.PorterDuff.Mode.MULTIPLY);
cT53.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(view){
Entity.setCollisionSize(Player.getEntity(), 0.6, 0.7);
			Entity.setRenderType(Player.getEntity(), EntityRenderType.player);

 ModPE.resetFov();
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

				}
}); 
MBaLayout.addView(cT53);

var cT54 = new android.widget.Button(ctx);
                cT54.setText("Set Bat");
				cT54.setTextColor(BUTcurr);
           cT54.setTextSize(BUTsize);
cT54.getBackground().setColorFilter(BUTcurr2, android.graphics.PorterDuff.Mode.MULTIPLY);
cT54.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(view){
Entity.setCollisionSize(Player.getEntity(), 0.2, 0.2, 0.2);

Entity.setRenderType(Player.getEntity(), EntityRenderType.bat);
			Entity.setMobSkin(Player.getEntity(),"mob/bat.png");
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

				}
}); 
MBaLayout.addView(cT54);

var cT55 = new android.widget.Button(ctx);
                cT55.setText("Set Chicken");
				cT55.setTextColor(BUTcurr);
           cT55.setTextSize(BUTsize);
cT55.getBackground().setColorFilter(BUTcurr2, android.graphics.PorterDuff.Mode.MULTIPLY);
cT55.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(view){
Entity.setCollisionSize(Player.getEntity(), 0.5, 0.7);
			Entity.setRenderType(Player.getEntity(), EntityRenderType.chicken);
			Entity.setMobSkin(Player.getEntity(),"mob/chicken.png");
Entity.setVelY(Player.getEntity(), 0.000002);
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

				}
}); 
MBaLayout.addView(cT55);

var cT56 = new android.widget.Button(ctx);
                cT56.setText("Set Mooshroom");
				cT56.setTextColor(BUTcurr);
           cT56.setTextSize(BUTsize);
cT56.getBackground().setColorFilter(BUTcurr2, android.graphics.PorterDuff.Mode.MULTIPLY);
cT56.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(view){
Entity.setCollisionSize(Player.getEntity(), 0.5, 0.7);
ModPE.resetFov();

Entity.setRenderType(Player.getEntity(), EntityRenderType.mushroomCow);
			Entity.setMobSkin(Player.getEntity(),"mob/mooshroom.png");
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

				}
}); 
MBaLayout.addView(cT56);

var cT57 = new android.widget.Button(ctx);
                cT57.setText("Set Invisible Spider");
				cT57.setTextColor(BUTcurr);
           cT57.setTextSize(BUTsize);
cT57.getBackground().setColorFilter(BUTcurr2, android.graphics.PorterDuff.Mode.MULTIPLY);
cT57.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(view){
Entity.setCollisionSize(Player.getEntity(), 0.6, 1.5);
			 Entity.setRenderType(Player.getEntity(), EntityRenderType.spider);
			Entity.setMobSkin(Player.getEntity(),"mob/spider.png");

ModPE.resetFov();
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

				}
}); 
MBaLayout.addView(cT57);

var cT58 = new android.widget.Button(ctx);
                cT58.setText("Set Cow");
				cT58.setTextColor(BUTcurr);
           cT58.setTextSize(BUTsize);
cT58.getBackground().setColorFilter(BUTcurr2, android.graphics.PorterDuff.Mode.MULTIPLY);
cT58.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(view){
Entity.setCollisionSize(Player.getEntity(), 0.9, 0.8);
			 Entity.setRenderType(Player.getEntity(), EntityRenderType.cow);
			Entity.setMobSkin(Player.getEntity(),"mob/cow.png");

Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

				}
}); 
MBaLayout.addView(cT58);

var cT59 = new android.widget.Button(ctx);
                cT59.setText("Set Ghast");
				cT59.setTextColor(BUTcurr);
           cT59.setTextSize(BUTsize);
cT59.getBackground().setColorFilter(BUTcurr2, android.graphics.PorterDuff.Mode.MULTIPLY);
cT59.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(view){
Entity.setCollisionSize(Player.getEntity(), 4, 4);
			Entity.setRenderType(Player.getEntity(), EntityRenderType.ghast);
			Entity.setMobSkin(Player.getEntity(),"mob/ghast.png");
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

				}
}); 
MBaLayout.addView(cT59);

var cT60 = new android.widget.Button(ctx);
                cT60.setText("Set Zombie");
				cT60.setTextColor(BUTcurr);
           cT60.setTextSize(BUTsize);
cT60.getBackground().setColorFilter(BUTcurr2, android.graphics.PorterDuff.Mode.MULTIPLY);
cT60.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(view){
Entity.setCollisionSize(Player.getEntity(), 0.6, 0.8);
			Entity.setRenderType(Player.getEntity(),  EntityRenderType.zombie);
			Entity.setMobSkin(Player.getEntity(),"mob/zombie.png");

Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

				}
}); 
MBaLayout.addView(cT60);

var cT61 = new android.widget.Button(ctx);
                cT61.setText("Set Skeleton");
				cT61.setTextColor(BUTcurr);
           cT61.setTextSize(BUTsize);
cT61.getBackground().setColorFilter(BUTcurr2, android.graphics.PorterDuff.Mode.MULTIPLY);
cT61.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(view){
Entity.setCollisionSize(Player.getEntity(), 0.6, 0.8);
			Entity.setRenderType(Player.getEntity(), EntityRenderType.skeleton);
			Entity.setMobSkin(Player.getEntity(),"mob/skeleton.png");
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

				}
}); 
MBaLayout.addView(cT61);

var cT62 = new android.widget.Button(ctx);
                cT62.setText("Set Creeper");
				cT62.setTextColor(BUTcurr);
           cT62.setTextSize(BUTsize);
cT62.getBackground().setColorFilter(BUTcurr2, android.graphics.PorterDuff.Mode.MULTIPLY);
cT62.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(view){
Entity.setCollisionSize(Player.getEntity(), 0.8, 06);
			Entity.setRenderType(Player.getEntity(), EntityRenderType.creeper);
			Entity.setMobSkin(Player.getEntity(),"mob/creeper.png");
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

				}
}); 
MBaLayout.addView(cT62);

var cT63 = new android.widget.Button(ctx);
                cT63.setText("Set Enderman");
				cT63.setTextColor(BUTcurr);
           cT63.setTextSize(BUTsize);
cT63.getBackground().setColorFilter(BUTcurr2, android.graphics.PorterDuff.Mode.MULTIPLY);
cT63.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(view){
Entity.setCollisionSize(Player.getEntity(), 1.8, 0.8);

Entity.setRenderType(Player.getEntity(), EntityRenderType.enderman);
			Entity.setMobSkin(Player.getEntity(),"mob/enderman.png");
ModPE.resetFov();
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

				}
}); 
MBaLayout.addView(cT63);

var cT64 = new android.widget.Button(ctx);
                cT64.setText("Set Blaze");
				cT64.setTextColor(BUTcurr);
           cT64.setTextSize(BUTsize);
cT64.getBackground().setColorFilter(BUTcurr2, android.graphics.PorterDuff.Mode.MULTIPLY);
cT64.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(view){
Entity.setCollisionSize(Player.getEntity(), 0.5, 2, 0.5);
Entity.setRenderType(Player.getEntity(), EntityRenderType.blaze);
			Entity.setMobSkin(Player.getEntity(),"mob/blaze.png");

Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

				}
}); 
MBaLayout.addView(cT64);

var cT65 = new android.widget.Button(ctx);
                cT65.setText("Set Silverfish");
				cT65.setTextColor(BUTcurr);
           cT65.setTextSize(BUTsize);
cT65.getBackground().setColorFilter(BUTcurr2, android.graphics.PorterDuff.Mode.MULTIPLY);
cT65.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(view){
Entity.setCollisionSize(Player.getEntity(), 0.3, 0.4, 0.3);

Entity.setRenderType(Player.getEntity(), EntityRenderType.silverfish);
			Entity.setMobSkin(Player.getEntity(),"mob/silverfish.png");

Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

				}
}); 
MBaLayout.addView(cT65);


	                   MBamenu11 = new android.widget.PopupWindow(MBaLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/2, ctx.getWindowManager().getDefaultDisplay().getHeight());
MBamenu11.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(2,0,0,0))); 
            MBamenu11.showAtLocation(ctx.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
        }catch(error){
            print("AJMODSMCPE FOUND " + error+"ERRORS");
        }
    }}));
}

/////////////////mb b

 function MBBaMenu11(){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var MBBaLayout = new android.widget.LinearLayout(ctx);
            var MBBaScroll = new android.widget.ScrollView(ctx);
            var MBBaLayout1 = new android.widget.LinearLayout(ctx);
            MBBaLayout.setOrientation(1);
            MBBaLayout1.setOrientation(1);

            MBBaScroll.addView(MBBaLayout);
            MBBaLayout1.addView(MBBaScroll);
	                  
	                  MBBamenu11 = new android.widget.PopupWindow(MBBaLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/2, ctx.getWindowManager().getDefaultDisplay().getHeight());
MBBamenu11.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(2,0,0,0))); 
            MBBamenu11.showAtLocation(ctx.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
        }catch(error){
            print("AJMODSMCPE FOUND " + error+"ERRORS");
        }
    }}));
}

//////////settings

function mbd12(){
MBBamenu12.dismiss();
MBamenu12.dismiss();
}

function mb12(){
MBBaMenu12();
MBaMenu12();
}

//////////////////message board lay top

 function MBaMenu12(){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var MBaLayout = new android.widget.LinearLayout(ctx);
            var MBaScroll = new android.widget.ScrollView(ctx);
            var MBaLayout1 = new android.widget.LinearLayout(ctx);
            MBaLayout.setOrientation(1);
            MBaLayout1.setOrientation(1);

            MBaScroll.addView(MBaLayout);
            MBaLayout1.addView(MBaScroll);
	                  

var scrollText = new android.widget.TextView(ctx);
scrollText.setText("⚠Settings⚠");
scrollText.setTextSize(15);                                                                                  
scrollText.setTextColor(android.graphics.Color.GRAY);
scrollText.setGravity(Gravity.CENTER);


 
scrollText.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

scrollText.setEllipsize(android.text.TextUtils.TruncateAt.MARQUEE);

scrollText.setMarqueeRepeatLimit(-1);
//
scrollText.setSingleLine();
scrollText.setHorizontallyScrolling(true);
scrollText.setSelected(true);
////////////
MBaLayout.addView(scrollText);



var cT66 = new android.widget.Button(ctx);
                cT66.setText("Kembali");
				cT66.setTextColor(BUTcurr);
           cT66.setTextSize(BUTsize);
cT66.getBackground().setColorFilter(BUTcurr2, android.graphics.PorterDuff.Mode.MULTIPLY);
cT66.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(view){
mbd12();
mb4()
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

				}
}); 
MBaLayout.addView(cT66);

var bar9 = new android.widget.ProgressBar(ctx, null, android.R.attr.progressBarStyleHorizontal);
    bar9.setMax(100);
    bar9.setProgress(0);
   bar9.setBackgroundDrawable(new android.graphics.drawable.GradientDrawable(android.graphics.drawable.GradientDrawable.Orientation.LEFT_RIGHT, [android.graphics.Color.CYAN, android.graphics.Color.WHITE, android.graphics.Color.CYAN]));
MBaLayout.addView(bar9);


var cT67 = new android.widget.Button(ctx);
                cT67.setText("Set Menu Position");
				cT67.setTextColor(BUTcurr);
cT67.getBackground().setColorFilter(BUTcurr2, android.graphics.PorterDuff.Mode.MULTIPLY);           cT67.setTextSize(BUTsize);
cT67.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(view){
hack();
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);			
				}
}); 
MBaLayout.addView(cT67);


 var cT70 = new android.widget.Button(ctx);
                cT70.setText("Color Menu 1");
				cT70.setTextColor(BUTcurr);
           cT70.setTextSize(BUTsize);
cT70.getBackground().setColorFilter(BUTcurr2, android.graphics.PorterDuff.Mode.MULTIPLY);
cT70.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(view){
color1();
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);				
				}
}); 
MBaLayout.addView(cT70);

var cT71 = new android.widget.Button(ctx);
                cT71.setText("Color Menu 2");
				cT71.setTextColor(BUTcurr);
cT71.getBackground().setColorFilter(BUTcurr2, android.graphics.PorterDuff.Mode.MULTIPLY);           cT71.setTextSize(BUTsize);
cT71.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(view){
color2();
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

				}
}); 
MBaLayout.addView(cT71);

var cT101 = new android.widget.Button(ctx);
                cT101.setText("Button Text Color");
				cT101.setTextColor(BUTcurr);
cT101.getBackground().setColorFilter(BUTcurr2, android.graphics.PorterDuff.Mode.MULTIPLY);           cT101.setTextSize(BUTsize);

cT101.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(view){
color3();
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);				
				}
}); 
MBaLayout.addView(cT101);

var cT102 = new android.widget.Button(ctx);
                cT102.setText("Button Size");
				cT102.setTextColor(BUTcurr);
cT102.getBackground().setColorFilter(BUTcurr2, android.graphics.PorterDuff.Mode.MULTIPLY);           cT102.setTextSize(BUTsize);

cT102.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(view){
color4();
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);				
				}
}); 
MBaLayout.addView(cT102);

var cT103 = new android.widget.Button(ctx);
                cT103.setText("Button Color");
				cT103.setTextColor(BUTcurr);
cT103.getBackground().setColorFilter(BUTcurr2, android.graphics.PorterDuff.Mode.MULTIPLY);           cT103.setTextSize(BUTsize);

cT103.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(view){
color5();
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);				
				}
}); 
MBaLayout.addView(cT103);

var button98 = new android.widget.Switch(ctx);
button98.setText("Rainbow Menu");
button98.setTextColor(android.graphics.Color.WHITE);
button98.setChecked(rain);
button98.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged:
function(){
if(rain == false) {
rain = true;
p14();
rainbow = true;
rainbowss = 1;
 rainON = true;
mbd12();
mb12();
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
}else if(rain == true){
rain = false;
rainbow = false;
rainbowss = 0;
rainON = false;
Backmenu.dismiss();
GUIColor = GUIColor2
currentColour = "black";
BackMenu();
mbd12();
mb12();
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
}
}
}));
MBaLayout.addView(button98)
             MBamenu12 = new android.widget.PopupWindow(MBaLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/2, ctx.getWindowManager().getDefaultDisplay().getHeight());
MBamenu12.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(2,0,0,0))); 
            MBamenu12.showAtLocation(ctx.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
        }catch(error){
            print("AJMODSMCPE FOUND " + error+"ERRORS");
        }
    }}));
}

/////////////////mb b

 function MBBaMenu12(){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var MBBaLayout = new android.widget.LinearLayout(ctx);
            var MBBaScroll = new android.widget.ScrollView(ctx);
            var MBBaLayout1 = new android.widget.LinearLayout(ctx);
            MBBaLayout.setOrientation(1);
            MBBaLayout1.setOrientation(1);

            MBBaScroll.addView(MBBaLayout);
            MBBaLayout1.addView(MBBaScroll);
	                  
	                  MBBamenu12 = new android.widget.PopupWindow(MBBaLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/2, ctx.getWindowManager().getDefaultDisplay().getHeight());
MBBamenu12.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(2,0,0,0))); 
            MBBamenu12.showAtLocation(ctx.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
        }catch(error){
            print("AJMODSMCPE FOUND " + error+"ERRORS");
        }
    }}));
} 

//////////nuke

function mbd13(){
MBBamenu13.dismiss();
MBamenu13.dismiss();
}

function mb13(){
MBBaMenu13();
MBaMenu13();
}

//////////////////message board lay top

 function MBaMenu13(){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var MBaLayout = new android.widget.LinearLayout(ctx);
            var MBaScroll = new android.widget.ScrollView(ctx);
            var MBaLayout1 = new android.widget.LinearLayout(ctx);
            MBaLayout.setOrientation(1);
            MBaLayout1.setOrientation(1);

            MBaScroll.addView(MBaLayout);
            MBaLayout1.addView(MBaScroll);
	                  

var scrollText = new android.widget.TextView(ctx);
scrollText.setText("⚠Server Menu⚠");
scrollText.setTextSize(15);                                                                                  
scrollText.setTextColor(android.graphics.Color.GRAY);
scrollText.setGravity(Gravity.CENTER);


 
scrollText.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

scrollText.setEllipsize(android.text.TextUtils.TruncateAt.MARQUEE);

scrollText.setMarqueeRepeatLimit(-1);
//
scrollText.setSingleLine();
scrollText.setHorizontallyScrolling(true);
scrollText.setSelected(true);
////////////
MBaLayout.addView(scrollText);



var cT85 = new android.widget.Button(ctx);
                cT85.setText("Kembali");
				cT85.setTextColor(BUTcurr);
cT85.getBackground().setColorFilter(BUTcurr2, android.graphics.PorterDuff.Mode.MULTIPLY);           cT85.setTextSize(BUTsize);
cT85.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(view){
mbd13();
mb4()
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

				}
}); 
MBaLayout.addView(cT85);

var bar10 = new android.widget.ProgressBar(ctx, null, android.R.attr.progressBarStyleHorizontal);
    bar10.setMax(100);
    bar10.setProgress(0);
   bar10.setBackgroundDrawable(new android.graphics.drawable.GradientDrawable(android.graphics.drawable.GradientDrawable.Orientation.LEFT_RIGHT, [android.graphics.Color.CYAN, android.graphics.Color.WHITE, android.graphics.Color.CYAN]));
MBaLayout.addView(bar10);


var cT86 = new android.widget.Button(ctx);
                cT86.setText("Server IP");
				cT86.setTextColor(BUTcurr);
cT86.getBackground().setColorFilter(BUTcurr2, android.graphics.PorterDuff.Mode.MULTIPLY);           cT86.setTextSize(BUTsize);
cT86.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(view){
//Function Here
clientMessage("IP:§4 "+Server.getAddress()+" ");

Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
}}); 
MBaLayout.addView(cT86);

var cT87 = new android.widget.Button(ctx);
                cT87.setText("Server Port");
				cT87.setTextColor(BUTcurr);
cT87.getBackground().setColorFilter(BUTcurr2, android.graphics.PorterDuff.Mode.MULTIPLY);           cT87.setTextSize(BUTsize);
cT87.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(view){
//Function Here
clientMessage("Port:§4 "+Server.getPort()+" ");

Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);


}}); 
MBaLayout.addView(cT87);

var cT88 = new android.widget.Button(ctx);
                cT88.setText("Players");
				cT88.setTextColor(BUTcurr);
cT88.getBackground().setColorFilter(BUTcurr2, android.graphics.PorterDuff.Mode.MULTIPLY);           cT88.setTextSize(BUTsize);
cT88.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(view){
//Function Here
clientMessage("Players:§4 "+ Server.getAllPlayers() +" ");

Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
}
}); 
MBaLayout.addView(cT88);

textview = android.widget.TextView(ctx);            textview.setText("Fly In Survival: Go In Creative \nSuper Speed: Game Speed Changer \nZoom: Zoom Changer \nSniper Bow \nOnly Day \nReal Time Display \nMessage Menu \nWorld Options \nPlayer Info \nLantern \nBlood \n\nThere Are More Mods That Work In Servers But Only You Can See"); 
textview.setTextSize(20);                                                                                  textview.setTextColor(android.graphics.Color.WHITE);
textview.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       

MBaLayout.addView(textview);



MBamenu13 = new android.widget.PopupWindow(MBaLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/2, ctx.getWindowManager().getDefaultDisplay().getHeight());
MBamenu13.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(2,0,0,0))); 
            MBamenu13.showAtLocation(ctx.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
        }catch(error){
            print("AJMODSMCPE FOUND " + error+"ERRORS");
        }
    }}));
}

/////////////////mb b

 function MBBaMenu13(){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var MBBaLayout = new android.widget.LinearLayout(ctx);
            var MBBaScroll = new android.widget.ScrollView(ctx);
            var MBBaLayout1 = new android.widget.LinearLayout(ctx);
            MBBaLayout.setOrientation(1);
            MBBaLayout1.setOrientation(1);

            MBBaScroll.addView(MBBaLayout);
            MBBaLayout1.addView(MBBaScroll);
	                  
	                  MBBamenu13 = new android.widget.PopupWindow(MBBaLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/2, ctx.getWindowManager().getDefaultDisplay().getHeight());
MBBamenu13.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(2,0,0,0))); 
            MBBamenu13.showAtLocation(ctx.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
        }catch(error){
            print("AJMODSMCPE FOUND " + error+"ERRORS");
        }
    }}));
} 

//////////nuke

function mbd14(){
MBBamenu14.dismiss();
MBamenu14.dismiss();
}

function mb14(){
MBBaMenu14();
MBaMenu14();
}

//////////////////message board lay top

 function MBaMenu14(){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var MBaLayout = new android.widget.LinearLayout(ctx);
            var MBaScroll = new android.widget.ScrollView(ctx);
            var MBaLayout1 = new android.widget.LinearLayout(ctx);
            MBaLayout.setOrientation(1);
            MBaLayout1.setOrientation(1);

            MBaScroll.addView(MBaLayout);
            MBaLayout1.addView(MBaScroll);
	                  

var scrollText = new android.widget.TextView(ctx);
scrollText.setText("⚠Music Player Options⚠");
scrollText.setTextSize(15);                                                                                  
scrollText.setTextColor(android.graphics.Color.GRAY);
scrollText.setGravity(Gravity.CENTER);


 
scrollText.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));

scrollText.setEllipsize(android.text.TextUtils.TruncateAt.MARQUEE);

scrollText.setMarqueeRepeatLimit(-1);
//
scrollText.setSingleLine();
scrollText.setHorizontallyScrolling(true);
scrollText.setSelected(true);
////////////
MBaLayout.addView(scrollText);



var cTmusicback = new android.widget.Button(ctx);
                cTmusicback.setText("Kembali");
				cTmusicback.setTextColor(BUTcurr);
cTmusicback.getBackground().setColorFilter(BUTcurr2, android.graphics.PorterDuff.Mode.MULTIPLY);           cTmusicback.setTextSize(BUTsize);
cTmusicback.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(view){
mbd14();
mb4()
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

				}
}); 
MBaLayout.addView(cTmusicback);

var scrollText = new android.widget.TextView(ctx);
scrollText.setText("<Currently Playing: " + musicText + "> ");
scrollText.setTextSize(15);                                                                                  scrollText.setTextColor(android.graphics.Color.BLACK);

 
scrollText.setBackgroundDrawable(new android.graphics.drawable.GradientDrawable(android.graphics.drawable.GradientDrawable.Orientation.LEFT_RIGHT, [android.graphics.Color.CYAN, android.graphics.Color.WHITE, android.graphics.Color.CYAN]));

scrollText.setEllipsize(android.text.TextUtils.TruncateAt.MARQUEE);

scrollText.setMarqueeRepeatLimit(-1);
//
scrollText.setSingleLine();
scrollText.setHorizontallyScrolling(true);
scrollText.setSelected(true);
////////////
MBaLayout.addView(scrollText);



var cTmusicnxt = new android.widget.Button(ctx);
                cTmusicnxt.setText("Next Song");
				cTmusicnxt.setTextColor(BUTcurr);
cTmusicnxt.getBackground().setColorFilter(BUTcurr2, android.graphics.PorterDuff.Mode.MULTIPLY);           cTmusicnxt.setTextSize(BUTsize);
cTmusicnxt.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(view){
//Function Here

mp.stop(); 
playMusic();
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
}}); 
MBaLayout.addView(cTmusicnxt);

var cTmusicply = new android.widget.Button(ctx);
                cTmusicply.setText("Play Music");
				cTmusicply.setTextColor(BUTcurr);
cTmusicply.getBackground().setColorFilter(BUTcurr2, android.graphics.PorterDuff.Mode.MULTIPLY);           cTmusicply.setTextSize(BUTsize);
cTmusicply.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(view){
playMusic();
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);


}}); 
MBaLayout.addView(cTmusicply);

var cTmusicstp = new android.widget.Button(ctx);
                cTmusicstp.setText("Stop Music");
				cTmusicstp.setTextColor(BUTcurr);
cTmusicstp.getBackground().setColorFilter(BUTcurr2, android.graphics.PorterDuff.Mode.MULTIPLY);           cTmusicstp.setTextSize(BUTsize);
cTmusicstp.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(view){
mp.stop(); Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
}
}); 
MBaLayout.addView(cTmusicstp);

var cTmusicstp1 = new android.widget.Button(ctx);
                cTmusicstp1.setText("Track List");
				cTmusicstp1.setTextColor(BUTcurr);
cTmusicstp1.getBackground().setColorFilter(BUTcurr2, android.graphics.PorterDuff.Mode.MULTIPLY);           cTmusicstp1.setTextSize(BUTsize);
cTmusicstp1.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(view){
Info2(); Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
}
}); 
MBaLayout.addView(cTmusicstp1);

var button58 = new android.widget.Switch(ctx);
button58.setText("Pause Music");
button58.setTextColor(android.graphics.Color.WHITE);
button58.setChecked(switched55);
button58.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged:
function(){
if(switched55 == false) {
switched55 = true;
mp.pause();
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
}else if(switched55 == true){
switched55 = false;
mp.start();
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
}
}
}));
MBaLayout.addView(button58);

var scrollText = new android.widget.TextView(ctx);
scrollText.setText("Music Player Made By: PeaceStorm (AgameR)");
scrollText.setTextSize(15);                                                                                  scrollText.setTextColor(android.graphics.Color.BLACK);

 
scrollText.setBackgroundDrawable(new android.graphics.drawable.GradientDrawable(android.graphics.drawable.GradientDrawable.Orientation.LEFT_RIGHT, [android.graphics.Color.CYAN, android.graphics.Color.WHITE, android.graphics.Color.CYAN]));

scrollText.setEllipsize(android.text.TextUtils.TruncateAt.MARQUEE);

scrollText.setMarqueeRepeatLimit(-1);
//
scrollText.setSingleLine();
scrollText.setHorizontallyScrolling(true);
scrollText.setSelected(true);
////////////
MBaLayout.addView(scrollText);


MBamenu14 = new android.widget.PopupWindow(MBaLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/2, ctx.getWindowManager().getDefaultDisplay().getHeight());
MBamenu14.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(2,0,0,0))); 
            MBamenu14.showAtLocation(ctx.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
        }catch(error){
            print("AJMODSMCPE FOUND " + error+"ERRORS");
        }
    }}));
}

/////////////////mb b

 function MBBaMenu14(){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var MBBaLayout = new android.widget.LinearLayout(ctx);
            var MBBaScroll = new android.widget.ScrollView(ctx);
            var MBBaLayout1 = new android.widget.LinearLayout(ctx);
            MBBaLayout.setOrientation(1);
            MBBaLayout1.setOrientation(1);

            MBBaScroll.addView(MBBaLayout);
            MBBaLayout1.addView(MBBaScroll);
	                  
	                  MBBamenu14 = new android.widget.PopupWindow(MBBaLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/2, ctx.getWindowManager().getDefaultDisplay().getHeight());
MBBamenu14.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(2,0,0,0))); 
            MBBamenu14.showAtLocation(ctx.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
        }catch(error){
            print("AJMODSMCPE FOUND " + error+"ERRORS");
        }
    }}));
} 

/////Credit to Dr. NHA

// a r g b |
var GUIColor = new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(125,120,0,82));
//defalt pink

var GUIColor1 =  new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(2,0,0,0)); 
//transparent

var GUIColor2 = new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(140,0,0,0)); 
//black

var GUIColor3 = new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(140,140,140,140)); 
//white

var GUIColor4 = new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(125,125,0,0));
//red

var GUIColor5 = new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(125,0,0,125));
//blue

var GUIColor6 = new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(125,80,80,80));
// light grey


var GUIColor7 = new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(125,50,50,50));
//grey

var GUIColor8 = new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(125,255,255,0));
//yellow


var GUIColor9 = new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(125,0,255,255));
//cyan

var GUIColor10 = new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(125,30,30,30));
//dark grey

var GUIColor11 = new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(125,0,125,0));
//green

var GUIColor12 = android.graphics.Color.MAGENTA;

var GUIName = android.graphics.Color.WHITE;

var currentColour = "black";

GUIColor99 = new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(125,120,0,82));
//pink

var Gravity = android.view.Gravity;
var GUIPos1 = Gravity.CENTER;
var GUIPos2 = Gravity.RIGHT;
var GUIPos = Gravity.RIGHT;
var GUIcen = Gravity.CENTER;
var GUIright = Gravity.RIGHT;
var GUIleft = Gravity.LEFT;
/////// End
GUIColor15 = new android.graphics.drawable.ColorDrawable(android.graphics.Color.GREEN);

GUIColor16 = new android.graphics.drawable.ColorDrawable(android.graphics.Color.LTGRAY);

GUIColor17 = new android.graphics.drawable.ColorDrawable(android.graphics.Color.GRAY);

GUIColor18 = new android.graphics.drawable.ColorDrawable(android.graphics.Color.DKGRAY);

GUIColor19 = new android.graphics.drawable.ColorDrawable(android.graphics.Color.CYAN);

GUIColor20 = new android.graphics.drawable.ColorDrawable(android.graphics.Color.YELLOW);

GUIColor21 = new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLUE);

GUIColor22 = new android.graphics.drawable.ColorDrawable(android.graphics.Color.MAGENTA);

GUIColor23 = new android.graphics.drawable.ColorDrawable(android.graphics.Color.RED);

GUIColor24 = new android.graphics.drawable.ColorDrawable(android.graphics.Color.WHITE);

GUIColor25 = new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLACK);
//////////
//button size//
var BUTsize = 15;
//defalt

var BUTsize1 = 2;
//x small

var BUTsize2 = 10;
//small

var BUTsize3 = 15;
//medium

var BUTsize5 = 25;
//large

var BUTsize6 = 35;
//x large


//////text colour/////
var BUTcurr = android.graphics.Color.WHITE;
//current

var BUTblue = android.graphics.Color.BLUE;

var BUTgreen = android.graphics.Color.GREEN;

var BUTblack = android.graphics.Color.BLACK;

var BUTyellow = android.graphics.Color.YELLOW;

var BUTred = android.graphics.Color.RED;

var BUTwhite = android.graphics.Color.WHITE;
////////////////
function red(){
BUTcurr = BUTred 
}

function blue(){
BUTcurr = BUTblue 
}

function yellow(){
BUTcurr = BUTyellow
}

function green(){
BUTcurr = BUTgreen
}

function black(){
BUTcurr = BUTblack
}

//////button colour/////
var BUTcurr2 = android.graphics.Color.TRANSPARENT;
//current

var BUTblue2 = android.graphics.Color.BLUE;

var BUTgreen2 = android.graphics.Color.GREEN;

var BUTblack2 = android.graphics.Color.BLACK;

var BUTyellow2 = android.graphics.Color.YELLOW;

var BUTred2 = android.graphics.Color.RED;

var BUTwhite2 = android.graphics.Color.WHITE;

var BUTtran2 = android.graphics.Color.TRANSPARENT;
////////////////
function red(){
BUTcurr2 = BUTred2 
}

function blue(){
BUTcurr2 = BUTblue2 
}

function yellow(){
BUTcurr2 = BUTyellow2
}

function green(){
BUTcurr2 = BUTgreen2
}

function black(){
BUTcurr2 = BUTblack2
}

function transparent(){
BUTcurr2 = BUTtran2
}

function white(){
BUTcurr2 = BUTwhite2
}
function p14(){
new android.os.Handler().postDelayed(new java.lang.Runnable({
run:function(){
if(rainbow==true){
p15();
GUIColor = GUIColor2

 textfunct();
}else{
}}
}),jingle);
}

function p15(){
new android.os.Handler().postDelayed(new java.lang.Runnable({
run:function(){
if(rainbow==true){
p16();
GUIColor = GUIColor9

 textfunct();


}else{
}}
}),jingle);
}

function p16(){
new android.os.Handler().postDelayed(new java.lang.Runnable({
run:function(){
if(rainbow==true){
p17();
GUIColor = GUIColor99;
textfunct();

}else{
}}
}),jingle);
}

function p17(){
new android.os.Handler().postDelayed(new java.lang.Runnable({
run:function(){
if(rainbow==true){
p18();
GUIColor = GUIColor4;
textfunct();
 

}else{
}}
}),jingle);
}

function p18(){
new android.os.Handler().postDelayed(new java.lang.Runnable({
run:function(){
if(rainbow==true){
p19();
GUIColor = GUIColor11;

 textfunct();

}else{
}}
}),jingle);
}

function p19(){
new android.os.Handler().postDelayed(new java.lang.Runnable({
run:function(){
if(rainbow==true){
p14();
GUIColor = GUIColor8;
textfunct();

}else{
}}
}),jingle);
}

function textfunct(){
Backmenu.dismiss();
BackMenu();
}

Block.defineBlock(200,"§eLight",["stone",0],0, false, 0);
Block.setShape(200, 0, 0, 0, 0, 0, 0);
Block.setLightLevel(200, 15);
var rainON = false;
var jingle = 450;
var on = true;
var off = false;
var positionL = 0;
var dev = 0;
var rainbowss = 0;
var rainbow = false; 
var positionR = 0;
var sspam = false;
var text = "AJModsMCPE V Remake !";
var musicText = "None";
var dup = "";
var cntr = 0;
var tick = 0;
var tickSec = 0;
var tickMin = 0;
var setName = 0;
var GUI;
var rain = false;
var mbbb11 = false;
var mbbb10 = false;
var mbbb9 = false;
var mbbb8 = false;
var mbbb7 = false;
var mbbb6 = false;
var mbbb5 = false;
var mbbb4 = false;
var mbbb3 = false;
var mbbb2 = false;
var mbbb = false;
var toggled01 = false;
var toggled1 = false;
var switched = false;
var switched11 = false;
var switched19 = false;
var switched20 = false;
var switched21 = false;
var switched22 = false;
var switched23 = false;
var switched24 = false;
var switched25 = false;
var switched26 = false;
var switched27 = false;
var switched28 = false;
var switched29 = false;
var switched30 = false;
var switched31 = false;
var switched32 = false;
var switched33 = false;
var switched34 = false;
var switched35 = false;
var switched36 = false;
var switched37 = false;
var switched38 = false;
var switched39 = false;
var switched40 = false;
var switched41 = false;
var switched42 = false;
var switched43 = false;
var switched44 = false;
var switched45 = false;
var switched46 = false;
var switched47 = false;
var switched48 = false;
var switched49 = false;
var switched50 = false;
var switched51 = false;
var switched52 = false;
var switched53 = false;
var switched54 = false;
var switched55 = false;
var sbpProgress1 = 0;
var sbpProgress2 = 0;
var sbpProgress3 = 0;
var spamMessage = "Fuck you !!";
pointKill = false;
ver = true;
entiStop = false;
tp = false;
autocrit = false;
var s = 1;
var Xpos = 0;
var Zpos = 0;
var s = 0;
var Xdiff = 0;
var Zdiff = 0;
var isFalling = false;
var ride = null;
const VEL_Y_OFFSET = -0.07840000092983246;
var can = 1;
var canGetHP = 1;
var HP;
var gravity = -0.07840000092983246;
var playerDir = [0, 0, 0];
var mobDir = [0, 0, 0];
var DEG_TO_RAD = Math.PI / 180;
var playerFlySpeed = 1;
var fps = 0;
var lastLoop = new Date;
var jumpUI = null;
var jumpHeight = "1";
var speed = "1";
var jump = 0;
var jumpVel = 0;
var playerDir = [0, 0, 0];
var mobDir = [0, 0, 0];
var DEG_TO_RAD = Math.PI / 180;
var curticks=0;
var uri1 = "https://www.google.com/search?q=";
var uri2 = "&oq=";
var uri3 = "&aqs=chrome..69i57.305838j0j4&client=ms-unknown&sourceid=chrome-mobile&ie=UTF-8";
var numbers = android.text.InputType.TYPE_CLASS_NUMBER;
var number = android.text.InputType.TYPE_NUMBER_FLAG_SIGNED;
var count = Player.getInventorySlotCount();
var zoom = true;
var carriedItem;
//Variables (Credit To PixelDroid)
var autoMusicSetting = "on";
var ppx, ppy, ppz = 0;


//The Event Where The Location Is Saved

function deathHook(m, v) {

if(m==Player.getEntity() && Entity.getNameTag(v)=="" && Player.getCarriedItem(m)!=261) {
    if(Entity.getEntityTypeId(v)==10) {
			clientMessage("Ayam dibunuh oleh " + Player.getName(Player.getEntity()));
		}
		if(Entity.getEntityTypeId(v)==11) {
			clientMessage("Sapi dibunuh oleh " + Player.getName(Player.getEntity()));
		}
		if(Entity.getEntityTypeId(v)==12) {
			clientMessage("Babi dibunuh oleh " + Player.getName(Player.getEntity()));
		}
		if(Entity.getEntityTypeId(v)==13) {
			clientMessage("Domba dibunuh oleh " + Player.getName(Player.getEntity()));
		}
		if(Entity.getEntityTypeId(v)==14) {
			clientMessage("Serigala dibunuh oleh " + Player.getName(Player.getEntity()));
		}
		if(Entity.getEntityTypeId(v)==15) {
			clientMessage("Warga Desa dibunuh oleh " + Player.getName(Player.getEntity()) + " . Jahatlu");
		}
		if(Entity.getEntityTypeId(v)==16) {
			clientMessage("Sapi jamuran dibunuh oleh " + Player.getName(Player.getEntity()));
		}
		if(Entity.getEntityTypeId(v)==17) {
			clientMessage("Cumi-cumi dibunuh oleh " + Player.getName(Player.getEntity()));
		}
		if(Entity.getEntityTypeId(v)==18) {
			clientMessage("Rabbit Invasion dibunuh oleh " + Player.getName(Player.getEntity()));
		}
		if(Entity.getEntityTypeId(v)==19) {
			clientMessage("Batman dibunuh oleh " + Player.getName(Player.getEntity()));
		}
		if(Entity.getEntityTypeId(v)==20) {
			clientMessage("Iron Golem dibunuh oleh " + Player.getName(Player.getEntity()));
		}
		if(Entity.getEntityTypeId(v)==21) {
			clientMessage("Snow Golem dibunuh oleh " + Player.getName(Player.getEntity()));
		}
		if(Entity.getEntityTypeId(v)==22) {
			clientMessage("Kucing dibunuh oleh " + Player.getName(Player.getEntity()));
		}
		if(Entity.getEntityTypeId(v)==32) {
			clientMessage("Zombie dibunuh oleh " + Player.getName(Player.getEntity()));
		}
		if(Entity.getEntityTypeId(v)==33) {
			clientMessage("Creeper dibunuh oleh " + Player.getName(Player.getEntity()));
		}
		if(Entity.getEntityTypeId(v)==34) {
			clientMessage("Skeleton dibunuh oleh " + Player.getName(Player.getEntity()));
		}
		if(Entity.getEntityTypeId(v)==35) {
			clientMessage("Spider was slain by " + Player.getName(Player.getEntity()));
		}
		if(Entity.getEntityTypeId(v)==36) {
			clientMessage("Zombie Pigman dibunuh oleh " + Player.getName(Player.getEntity()));
		}
		if(Entity.getEntityTypeId(v)==37) {
			clientMessage("Slime dibunuh oleh " + Player.getName(Player.getEntity()));
		}
		if(Entity.getEntityTypeId(v)==38) {
			clientMessage("Enderman dibunuh oleh " + Player.getName(Player.getEntity()));
		}
		if(Entity.getEntityTypeId(v)==39) {
			clientMessage("Silverfish dibunuh oleh " + Player.getName(Player.getEntity()));
		}
		if(Entity.getEntityTypeId(v)==40) {
			clientMessage("Laba-laba goa dibunuh oleh " + Player.getName(Player.getEntity()));
		}
		if(Entity.getEntityTypeId(v)==41) {
			clientMessage("Ghast(kompor) dibunuh oleh " + Player.getName(Player.getEntity()));
		}
		if(Entity.getEntityTypeId(v)==42) {
			clientMessage("Magma Cube dibunuh oleh " + Player.getName(Player.getEntity()));
		}
		if(Entity.getEntityTypeId(v)==43) {
			clientMessage("Blaze dibunuh oleh " + Player.getName(Player.getEntity()));
		}
		if(Entity.getEntityTypeId(v)==44) {
			clientMessage("Zombie Villager dibunuh oleh " + Player.getName(Player.getEntity()));
		}
		if(Entity.getEntityTypeId(v)==45) {
			clientMessage("Witch dibunuh oleh " + Player.getName(Player.getEntity()));
		}
		}
		if(m==Player.getEntity() && !Entity.getNameTag(v)=="" && Player.getCarriedItem(m)!=261) {
			clientMessage(Entity.getNameTag(v) + " dimutilasi oleh " + Player.getName(Player.getEntity()));
			}
			if(m==Player.getEntity() && Entity.getNameTag(v)=="" && Player.getCarriedItem(m)==261) {
    if(Entity.getEntityTypeId(v)==10) {
			clientMessage("Ayam ditembak oleh " + Player.getName(Player.getEntity()));
		}
		if(Entity.getEntityTypeId(v)==11) {
			clientMessage("Sapi ditembak oleh " + Player.getName(Player.getEntity()));
		}
		if(Entity.getEntityTypeId(v)==12) {
			clientMessage("Babi ditembak oleh " + Player.getName(Player.getEntity()));
		}
		if(Entity.getEntityTypeId(v)==13) {
			clientMessage("Domba ditembak oleh " + Player.getName(Player.getEntity()));
		}
		if(Entity.getEntityTypeId(v)==14) {
			clientMessage("Serigala ditembak oleh " + Player.getName(Player.getEntity()));
		}
		if(Entity.getEntityTypeId(v)==15) {
			clientMessage("Warga Desa ditembak oleh " + Player.getName(Player.getEntity()));
		}
		if(Entity.getEntityTypeId(v)==16) {
			clientMessage("Sapi Jamuran ditembak oleh " + Player.getName(Player.getEntity()));
		}
		if(Entity.getEntityTypeId(v)==17) {
			clientMessage("Cumi-cumi ditembak oleh " + Player.getName(Player.getEntity()));
		}
		if(Entity.getEntityTypeId(v)==18) {
			clientMessage("Kelinci ditembak oleh " + Player.getName(Player.getEntity()));
		}
		if(Entity.getEntityTypeId(v)==19) {
			clientMessage("Kelelawar ditembak oleh " + Player.getName(Player.getEntity()));
		}
		if(Entity.getEntityTypeId(v)==20) {
			clientMessage("Iron Golem ditembak oleh " + Player.getName(Player.getEntity()));
		}
		if(Entity.getEntityTypeId(v)==21) {
			clientMessage("Snow Golem ditembak oleh " + Player.getName(Player.getEntity()));
		}
		if(Entity.getEntityTypeId(v)==22) {
			clientMessage("Kucing ditembak oleh " + Player.getName(Player.getEntity()));
		}
		if(Entity.getEntityTypeId(v)==32) {
			clientMessage("Zombie ditembak oleh " + Player.getName(Player.getEntity()));
		}
		if(Entity.getEntityTypeId(v)==33) {
			clientMessage("Creeper ditembak oleh " + Player.getName(Player.getEntity()));
		}
		if(Entity.getEntityTypeId(v)==34) {
			clientMessage("Skeleton ditembak oleh " + Player.getName(Player.getEntity()));
		}
		if(Entity.getEntityTypeId(v)==35) {
			clientMessage("Laba-laba ditembak oleh " + Player.getName(Player.getEntity()));
		}
		if(Entity.getEntityTypeId(v)==36) {
			clientMessage("Zombie Pigman ditembak oleh " + Player.getName(Player.getEntity()));
		}
		if(Entity.getEntityTypeId(v)==37) {
			clientMessage("Slime ditembak oleh " + Player.getName(Player.getEntity()));
		}
		if(Entity.getEntityTypeId(v)==38) {
			clientMessage("Enderman ditembak oleh " + Player.getName(Player.getEntity()));
		}
		if(Entity.getEntityTypeId(v)==39) {
			clientMessage("Silverfish ditembak oleh " + Player.getName(Player.getEntity()));
		}
		if(Entity.getEntityTypeId(v)==40) {
			clientMessage("Laba-laba goa ditembak oleh " + Player.getName(Player.getEntity()));
		}
		if(Entity.getEntityTypeId(v)==41) {
			clientMessage("Ghast ditembak oleh " + Player.getName(Player.getEntity()));
		}
		if(Entity.getEntityTypeId(v)==42) {
			clientMessage("Magma Cube ditembak oleh " + Player.getName(Player.getEntity()));
		}
		if(Entity.getEntityTypeId(v)==43) {
			clientMessage("Blaze ditembak oleh " + Player.getName(Player.getEntity()));
		}
		if(Entity.getEntityTypeId(v)==44) {
			clientMessage("Zombie Villager ditembak oleh " + Player.getName(Player.getEntity()));
		}
		if(Entity.getEntityTypeId(v)==45) {
			clientMessage("Witch ditembak oleh " + Player.getName(Player.getEntity()));
		}
		}
		if(m==Player.getEntity() && !Entity.getNameTag(v)=="" && Player.getCarriedItem(m)==261) {
			clientMessage(Entity.getNameTag(v) + " ditembak oleh " + Player.getName(Player.getEntity()));
			}
			



if(Player.getEntity(v)) {

ModPE.saveData("x_pD_" + Level.getWorldDir(),Player.getX().toString());

ModPE.saveData("y_pD_" + Level.getWorldDir(),Player.getY().toString());

ModPE.saveData("z_pD_" + Level.getWorldDir(),Player.getZ().toString());

}

}




function pDOpen() {

Entity.setPosition(Player.getEntity(), ppx, ppy, ppz);

}

line111 = false
var Speed = 110;
var greenPOS = 0;
var Online = false;
var Start = false;
var directory = new android.graphics.BitmapFactory.decodeFile("/sdcard/games/com.mojang/minecraftpe/Nha/motion.png"); 
var FFN = 
false;
var moneyDrop = false;
var God = false;
var numbers = android.text.InputType.TYPE_CLASS_NUMBER;
var number = false; android.text.InputType.TYPE_NUMBER_FLAG_SIGNED;
var textview;
var GUI;
var RenderLayer = 1;
var OpaqLayer  = 0;
var menu;
var BtnOn = true;
var flyon = false;
var un = false;
var inGame = false;
var img1 = new android.graphics.BitmapFactory.decodeFile("mnt/sdcard/games/com.mojang/ModScript/DamageIndicators/main.png");
var img2 = new android.graphics.BitmapFactory.decodeFile("mnt/sdcard/games/com.mojang/ModScript/DamageIndicators/villager.png");
var img3 = new android.graphics.BitmapFactory.decodeFile("mnt/sdcard/games/com.mojang/ModScript/DamageIndicators/nothing.png");
var img4 = new android.graphics.BitmapFactory.decodeFile("mnt/sdcard/games/com.mojang/ModScript/DamageIndicators/zombie.png");
var img5 = new android.graphics.BitmapFactory.decodeFile("mnt/sdcard/games/com.mojang/ModScript/DamageIndicators/chicken.png");
var img6 = new android.graphics.BitmapFactory.decodeFile("mnt/sdcard/games/com.mojang/ModScript/DamageIndicators/cow.png");
var img7 = new android.graphics.BitmapFactory.decodeFile("mnt/sdcard/games/com.mojang/ModScript/DamageIndicators/pig.png");
var img8 = new android.graphics.BitmapFactory.decodeFile("mnt/sdcard/games/com.mojang/ModScript/DamageIndicators/sheep.png");
var img9 = new android.graphics.BitmapFactory.decodeFile("mnt/sdcard/games/com.mojang/ModScript/DamageIndicators/wolf.png"); 
var img10 = new android.graphics.BitmapFactory.decodeFile("mnt/sdcard/games/com.mojang/ModScript/DamageIndicators/squid.png");
var img11 = new android.graphics.BitmapFactory.decodeFile("mnt/sdcard/games/com.mojang/ModScript/DamageIndicators/mooshroom.png");
var img12 = new android.graphics.BitmapFactory.decodeFile("mnt/sdcard/games/com.mojang/ModScript/DamageIndicators/creeper.png");
var img13 = new android.graphics.BitmapFactory.decodeFile("mnt/sdcard/games/com.mojang/ModScript/DamageIndicators/skeleton.png");
var img14 = new android.graphics.BitmapFactory.decodeFile("mnt/sdcard/games/com.mojang/ModScript/DamageIndicators/spider.png");
var img15 = new android.graphics.BitmapFactory.decodeFile("mnt/sdcard/games/com.mojang/ModScript/DamageIndicators/zombiepigman.png");
var img16 = new android.graphics.BitmapFactory.decodeFile("mnt/sdcard/games/com.mojang/ModScript/DamageIndicators/slime.png");
var img17 = new android.graphics.BitmapFactory.decodeFile("mnt/sdcard/games/com.mojang/ModScript/DamageIndicators/enderman.png");
var img18 = new android.graphics.BitmapFactory.decodeFile("mnt/sdcard/games/com.mojang/ModScript/DamageIndicators/silverfish.png");
var img19 = new android.graphics.BitmapFactory.decodeFile("mnt/sdcard/games/com.mojang/ModScript/DamageIndicators/ocelot.png");
var img20 = new android.graphics.BitmapFactory.decodeFile("mnt/sdcard/games/com.mojang/ModScript/DamageIndicators/rabbit.png");
var img21 = new android.graphics.BitmapFactory.decodeFile("mnt/sdcard/games/com.mojang/ModScript/DamageIndicators/bat.png");
var img22 = new android.graphics.BitmapFactory.decodeFile("mnt/sdcard/games/com.mojang/ModScript/DamageIndicators/cavespider.png");
var img23 = new android.graphics.BitmapFactory.decodeFile("mnt/sdcard/games/com.mojang/ModScript/DamageIndicators/ghast.png");
var img24 = new android.graphics.BitmapFactory.decodeFile("mnt/sdcard/games/com.mojang/ModScript/DamageIndicators/magmacube.png");
var img25 = new android.graphics.BitmapFactory.decodeFile("mnt/sdcard/games/com.mojang/ModScript/DamageIndicators/blaze.png");




var mainimg = new android.graphics.drawable.BitmapDrawable(img1);
var villagerimg = new android.graphics.drawable.BitmapDrawable(img2);
var nothingimg = new android.graphics.drawable.BitmapDrawable(img3);
var zombieimg = new android.graphics.drawable.BitmapDrawable(img4);
var chickenimg = new android.graphics.drawable.BitmapDrawable(img5);
var cowimg = new android.graphics.drawable.BitmapDrawable(img6);
var pigimg = new android.graphics.drawable.BitmapDrawable(img7);
var sheepimg = new android.graphics.drawable.BitmapDrawable(img8);
var mooshroomimg = new android.graphics.drawable.BitmapDrawable(img11);
var wolfimg = new android.graphics.drawable.BitmapDrawable(img9);
var squidimg = new android.graphics.drawable.BitmapDrawable(img10);
var creeperimg = new android.graphics.drawable.BitmapDrawable(img12);
var skeletonimg = new android.graphics.drawable.BitmapDrawable(img13);
var spiderimg = new android.graphics.drawable.BitmapDrawable(img14);
var zombiepigmanimg = new android.graphics.drawable.BitmapDrawable(img15);
var slimeimg = new android.graphics.drawable.BitmapDrawable(img16);
var endermanimg = new android.graphics.drawable.BitmapDrawable(img17);
var silverfishimg = new android.graphics.drawable.BitmapDrawable(img18);
var ocelotimg = new android.graphics.drawable.BitmapDrawable(img19);
var rabbitimg = new android.graphics.drawable.BitmapDrawable(img20);
var batimg = new android.graphics.drawable.BitmapDrawable(img21);
var cavespiderimg = new android.graphics.drawable.BitmapDrawable(img22);
var ghastimg = new android.graphics.drawable.BitmapDrawable(img23);
var magmacubeimg = new android.graphics.drawable.BitmapDrawable(img24);
var blazeimg = new android.graphics.drawable.BitmapDrawable(img25);


var activatedGUI=false;
var activatedChangingGUI=0;
var ticker=60;
var start=false;
var x = "?";

var NameX=140;
var NameY=42;
var HealthX=140;
var HealthY=90;

function procCmd(command) 
{ 
var cmd = command.split(" "); 
if(cmd[0]=="edit")
{
activatedChangingGUI=1;
}
if(cmd[0]=="finish")
{
activatedChangingGUI=2;
}
}

var arrows=[];
var selected=0;
var size=.5
var name=" AngryVillager "
var particle=[
ParticleType.angryVillager,
ParticleType.bubble,
ParticleType.cloud,
ParticleType.crit,
ParticleType.dripLava,
ParticleType.dripWater,
ParticleType.enchantmenttable,
ParticleType.fallingDust,
ParticleType.flame,
ParticleType.happyVillager,
ParticleType.heart,
ParticleType.hugeexplosion,
ParticleType.hugeexplosionSeed,
ParticleType.ink,
ParticleType.largeexplode,
ParticleType.lava,
ParticleType.mobFlame,
ParticleType.note,
ParticleType.portal,
ParticleType.rainSplash,
ParticleType.redstone,
ParticleType.slime,
ParticleType.smoke,
ParticleType.smoke2,
ParticleType.snowballpoof,
ParticleType.spell,
ParticleType.spell2,
ParticleType.spell3,
ParticleType.splash,
ParticleType.suspendedTown,
ParticleType.terrain,
ParticleType.waterWake];


function p11(){
new android.os.Handler().postDelayed(new java.lang.Runnable({
run:function(){
p12();
p11funct();
if(inGame==false){
}else{
}}
}),300);
}

function p12(){
new android.os.Handler().postDelayed(new java.lang.Runnable({run:function()
{
p13();

p12funct();
if(inGame==false){
}else{
}}
}),300);
}

function p13(){
new android.os.Handler().postDelayed(new java.lang.Runnable({
run:function(){
p11();

p13funct();
 
if(inGame==false){
}else{
}}
}),300);
}


ctx.runOnUiThread(new java.lang.Runnable(){
run:function(){
try{
mb();
mb2();

ctx.getSystemService(android.content.Context.VIBRATOR_SERVICE).vibrate(37);
android.widget.Toast.makeText(ctx,new android.text.Html.fromHtml("<b><font color=#FFD800>Mohon <font color=#FFD800>Tunggu <font color=#FFD800>."),2).show();
android.widget.Toast.makeText(ctx,new android.text.Html.fromHtml("<b><font color=#FFD800>Mohon <font color=#FFD800>Tunggu <font color=#FFD800>.."),2).show();
android.widget.Toast.makeText(ctx,new android.text.Html.fromHtml("<b><font color=#FFD800>Mohon <font color=#FFD800>Tunggu <font color=#FFD800>..."),2).show();
android.widget.Toast.makeText(ctx,new android.text.Html.fromHtml("<b><font color=#FFD800>Mohon <font color=#FFD800>Tunggu <font color=#FFD800>."),2).show();
android.widget.Toast.makeText(ctx,new android.text.Html.fromHtml("<b><font color=#FFD800>Mohon <font color=#FFD800>Tunggu <font color=#FFD800>.."),2).show();
android.widget.Toast.makeText(ctx,new android.text.Html.fromHtml("<b><font color=#FFD800>Mohon <font color=#FFD800>Tunggu <font color=#FFD800>..."),2).show();
android.widget.Toast.makeText(ctx,new android.text.Html.fromHtml("<b><font color=#1E90FF>Selesai !!!</b>"),0).show();
android.widget.Toast.makeText(ctx,new android.text.Html.fromHtml("<b><font color=#FF8605>This Mod has been remake by <b><font color=#FF3900>GoogleX"),0).show();
android.widget.Toast.makeText(ctx,new android.text.Html.fromHtml("<b><font color=#FFFFFF>Credit To:"),3).show();
android.widget.Toast.makeText(ctx,new android.text.Html.fromHtml("<b><font color=#7F0000>PeaceStorm A.K.A AgameR"),3).show();
android.widget.Toast.makeText(ctx,new android.text.Html.fromHtml("<b><font color=#00FFFF>AJ170_iOS_King"),3).show();
android.widget.Toast.makeText(ctx,new android.text.Html.fromHtml("<b><font color=#FF6816>And All ^-^ !!!"),3).show();
}catch(err){
clientMessage("Error:"+err)
}
}
})

function p11funct(){
ModPE.langEdit("selectWorld.gameMode.creative","§aCreative");

ModPE.langEdit("selectWorld.gameMode.survival","§aSurvival");

ModPE.langEdit("playscreen.lastPlayed.daysAgo","§a%1 hari yang lalu");

ModPE.langEdit("playscreen.lastPlayed.longAgo","§aBelum lama");

ModPE.langEdit("playscreen.lastPlayed.today","§aHari ini");

ModPE.langEdit("playscreen.lastPlayed.weeksAgo","§a%1 Minggu yang lalu");

ModPE.langEdit("playscreen.lastPlayed.yesterday","§aKemarin");


//skins
ModPE.langEdit("skin.New","§aTerbaru");


//default
ModPE.langEdit("menu.copyright"," ©GoogleX And AJ170");

ModPE.langEdit("menu.play","Mulai");

ModPE.langEdit("menu.options","Setelan");
ModPE.langEdit("menu.skins","Skin");

ModPE.langEdit("deathScreen.message","Innalillahi");
}

//function 1
function p12funct(){
ModPE.langEdit("selectWorld.gameMode.creative","§1Creative");

ModPE.langEdit("selectWorld.gameMode.survival","§1Survival");

ModPE.langEdit("playscreen.lastPlayed.daysAgo","§1%1 hari yang lalu");

ModPE.langEdit("playscreen.lastPlayed.longAgo","§1Belum lama");

ModPE.langEdit("playscreen.lastPlayed.today","§1Hari ini");

ModPE.langEdit("playscreen.lastPlayed.weeksAgo","§1%1 Minggu yang lalu");

ModPE.langEdit("playscreen.lastPlayed.yesterday","§1Kemarin");


//skins
ModPE.langEdit("skin.New","§1Terbaru");


//default
ModPE.langEdit("menu.copyright"," ©GoogleX And AJ170");

ModPE.langEdit("menu.play","§1Mulai");

ModPE.langEdit("menu.options","§1Setelan");

ModPE.langEdit("menu.skins","§1Skin");

ModPE.langEdit("deathScreen.message","Innalillahi");
}

//function 4
function p13funct(){
	
ModPE.langEdit("selectWorld.gameMode.creative","§4Creative");

ModPE.langEdit("selectWorld.gameMode.survival","§4Survival");

ModPE.langEdit("playscreen.lastPlayed.daysAgo","§4%1 hari yang lalu");

ModPE.langEdit("playscreen.lastPlayed.longAgo","§4Belum lama");

ModPE.langEdit("playscreen.lastPlayed.today","§4Hari ini");

ModPE.langEdit("playscreen.lastPlayed.weeksAgo","§4%1 Minggu yang lalu");

ModPE.langEdit("playscreen.lastPlayed.yesterday","§1Kemarin");


//skins
ModPE.langEdit("skin.New","§4Terbaru");

//default
ModPE.langEdit("menu.copyright"," ©GoogleX And AJ170");

ModPE.langEdit("menu.play","§4Mulai");

ModPE.langEdit("menu.options","§4Setelan");

ModPE.langEdit("menu.skins","§4Skin");

ModPE.langEdit("deathScreen.message","Innalillahi");
}

//Var for the text (GLX)
var loopW=1;
var word = {
	messageLocating:["§3Finding Kids To Troll","§eTrying to grief server","§4Grief Is Da Best","§f§kEaster §5Egg","§aDrinking Vodka","§aThanks Jeb_"]
}

//Random Text (GLX)
function randW(x){
	return x[Math.floor(Math.random()*x.length)];
	var loopW=0;
	}

//Looping For Re-Fresh Text
do {
    ModPE.langEdit("progressScreen.message.locating",randW(word.messageLocating));
    loopW++;
}
while (loopW < 1);
			
ModPE.langEdit("progressScreen.message.done","§9Have Fun!");
ModPE.langEdit("progressScreen.message.building","Remake By: §e§l§oGoogleX");
ModPE.langEdit("progressScreen.cantConnect","§6Stop Using §eMcDonalds §5WiFi!");
ModPE.langEdit("progressScreen.generating","§6AJModsMCPE §b§l§oRemake §4§l§oEdition");
ModPE.langEdit("playscreen.header.local","§6Pilih world");
ModPE.langEdit("skins.title","§6Skin");
ModPE.langEdit("options.title","§5Setelan");
ModPE.langEdit("playscreen.new","§5Buat baru");
ModPE.langEdit("playscreen.quit","§6Kembali");
ModPE.langEdit("skins.restore.button","§5Pulihkan");
ModPE.langEdit("createWorldScreen.advanced","§bLanjutan");
ModPE.langEdit("externalServerScreen.addServer","§6Tambahkan server");
ModPE.langEdit("multiplayer.player.joined","§5%s masuk kedalam game");
ModPE.langEdit("multiplayer.player.left","§b%s keluar dari game");
ModPE.langEdit("deathScreen.quit","§bMain Menu");
ModPE.langEdit("deathScreen.respawn","§5Idupin");
ModPE.langEdit("pauseScreen.quit","§bMain Menu");
ModPE.langEdit("pauseScreen.options","§6Setelan");
ModPE.langEdit("pauseScreen.back","§5Kembali ke laptop");
ModPE.langEdit("menu.returnToGame","§5Kembali ke laptop");
ModPE.langEdit("death.attack.mob","§6%1$s dibunuh oleh %2$s");
ModPE.langEdit("death.attack.fall","§b%1$s patah kaki");
ModPE.langEdit("death.attack.explosion","§6%1$s kena ledakan");
ModPE.langEdit("death.attack.arrow","§5%1$s ditembak oleh %2$s");
ModPE.langEdit("death.attack.drown","§b%1$s gk bisa berenang");
ModPE.langEdit("death.fell.accident.generic","§6%1$s bosen idup");
ModPE.langEdit("death.attack.outOfWorld","§5%1$s lagi mabok");
ModPE.langEdit("death.attack.onFire","§b%1$s bakar diri (mau demo kali)");
ModPE.langEdit("death.attack.magic","§6%1$s disihir");
ModPE.langEdit("death.attack.inWall","§5%1$s kejepit tembok");
ModPE.langEdit("death.attack.lava","§b%1$s mau berenang di lahar (GREGED)");
ModPE.langEdit("death.attack.inFire","§6%1$s terbakar");
ModPE.langEdit("death.attack.cactus","§5%1$s ....au ah");
ModPE.langEdit("commands.op.success","§lOpped (not oppai) %s");
ModPE.langEdit("commands.banip.success","§rBanned IP address §l%s");
ModPE.langEdit("commands.banip.success.players","§rBanned IP address §l%s §rsampai %s");
ModPE.langEdit("chatScreen.hide","§bSembunyikan");
ModPE.langEdit("action.interact.createMap","§6Buat map");
ModPE.langEdit("createWorldScreen.action.editLocal","§5Jadikan tak terbatas");
ModPE.langEdit("createWorldScreen.action.local","§7Buat World");
ModPE.langEdit("createWorldScreen.alwaysDay","§9Selalu pagi");
ModPE.langEdit("createWorldScreen.delete","§4Hapus");
ModPE.langEdit("createWorldScreen.game.settings","§bSetelan game");
ModPE.langEdit("createWorldScreen.gameMode.creative","§6Creative");
ModPE.langEdit("createWorldScreen.gameMode.survival","§5Survival");
ModPE.langEdit("createWorldScreen.header.local","§2World Maker");
ModPE.langEdit("playscreen.fileSize.MB","§bMB");
ModPE.langEdit("playscreen.fileSize.GB","§bGB");

var starterUI = null;
var closeUI = null;
var droidPE = null;
var gunUI = null;
var jumpUI = null;
var flyUI = null;
var controlUI = null;

 
function dip2px(ctx, dips){
    return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
}

function newLevel(){
LoadTeleports();
Info();
    clientMessage("§l§3===========================");
clientMessage("§b§l§oWelcome §4§l§o" + Player.getName(Player.getEntity()) + "§b§l§o To §6§l§oAJModsMCPE");
clientMessage("§b§l§oMenu By §6170_Crew");
clientMessage("§b§l§oRemade by §aGoogleX");
clientMessage("§b§l§ox: " + Math.floor(Player.getX()) + " §b§l§oy: " + Math.floor(Player.getY() - 1) + " §b§l§oz: " + Math.floor(Player.getZ()));
clientMessage("§l§3===========================");
ctx.runOnUiThread(new java.lang.Runnable({
run: function() {
try {
MusicPF();
}
catch(e) {
print("Error: " + e);
}
}
}));
Cbutton();
}

/*
* @Cbutton
* @function android.widget.Button
*/
 function Cbutton() {
ctx.runOnUiThread(new Runnable({ run: function() {
	try {
		var menuBtn = new android.widget.ImageButton(ctx);
		menuBtn.setImageBitmap(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(cmdd0,0), 0, android.util.Base64.decode(cmdd0,0).length));
		menuBtn.setOnClickListener(new View.OnClickListener({
			onClick: function(viewarg){
				greenPOS = 0;
				GUICC.dismiss();
				cobra1();
				Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.click", 100, 100);
			}
		}));
		
		menuBtn.setOnLongClickListener(new android.view.View.OnLongClickListener() {
					onLongClick: function(v,t) {
						pressed=true;
						android.widget.Toast.makeText(ctx, "Geser tombolnya untuk memindahkan", 1).show();
						ctx.getSystemService(android.content.Context.VIBRATOR_SERVICE).vibrate(37);
						return true;
					}
				});
		
		menuBtn.setOnTouchListener(new android.view.View.OnTouchListener() {
					onTouch :function(v, e) {
						if(!pressed) {
							mX=e.getX();
							mY=e.getY();
						}
						if(pressed) {
							var action = e.getAction() 
							if(action==2) {
								var X=parseInt(e.getX()-mX)*-1/10;
								var Y=parseInt(e.getY()-mY)*-1/10;
								buttonX += X;
								buttonY += Y;
								GUICC.update(parseInt(buttonX), parseInt(buttonY), -1, -1);
							}
							if(action==1)
								pressed=false;
						}
						return false;
					}
				});
		
		GUICC = new PopupWindow(menuBtn, 75, 75);
		GUICC.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
		GUICC.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(125,66,0,0))); 
		GUICC.showAtLocation(ctx.getWindow().getDecorView(), Gravity.BOTTOM | Gravity.RIGHT, buttonX, buttonY);
		}catch(err){
			clientMessage("e/" + err + " #" + err.lineNumber);
		}
	}}));
}

/*
 
function Cbutton(){
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{ 
            var layout = new android.widget.LinearLayout(ctx);
            layout.setOrientation(1);

var menuBtn = new android.widget.ImageButton(ctx);
			menuBtn.setImageBitmap(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(cmdd0,0), 0, android.util.Base64.decode(cmdd0,0).length));
  
            menuBtn.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){

greenPOS = 0
 GUICC.dismiss();
cobra1();
Level.playSound(Player.getX(), Player.getY(), Player.getZ(), "random.break", 100, 100);

}
            }));
            layout.addView(menuBtn);

            GUICC = new android.widget.PopupWindow(layout, dip2px(ctx, 34), dip2px(ctx, 34));
            GUICC.setWidth(dip2px(ctx, 34));
            GUICC.setHeight(dip2px(ctx, 34));
            GUICC.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(125,66,0,0))); 
            
            
            GUICC.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, dip2px(ctx, 40));
               }catch(err){
}
    }}));
}
*/

/*
* @cobra1
* @function phase1
*/
function cobra1(){
activating();
active();
}

/*
* @activating
* @function activate mod GUIs
*/
function activating(){
new android.os.Handler().postDelayed(new java.lang.Runnable({run:function()
{
activation.dismiss();
active1();
active5();
scan1();
scanning();
}
}),2000);
}
///



function active(){

 var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();

    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var activeLayout = new android.widget.LinearLayout(ctx);
            var activeScroll = new android.widget.ScrollView(ctx);
            var activeLayout1 = new android.widget.LinearLayout(ctx);
            activeLayout.setOrientation(1);
            activeLayout1.setOrientation(1);

            activeScroll.addView(activeLayout);
            activeLayout1.addView(activeScroll);


var button = new android.widget.Button(ctx);
            button.setText("mod sedang diaktifkan");
 button.setTextColor(android.graphics.Color.RED);
            button.setWidth(60);
            button.setHeight(60);
button.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
 activeLayout.addView(button);

	                  activation = new android.widget.PopupWindow(activeLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/3, ctx.getWindowManager().getDefaultDisplay().getHeight()/5);
activation.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(161,0,0,0))); 
            activation.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.CENTER, 0, 0);
ModPE.showTipMessage('§6Remake Version');
        }catch(error){
            print("Project X v2 FOUND " + error+"ERRORS");
        }
    }}));
}

///

function line(){
activation5.dismiss();
active5();
}

function scan1(){
new android.os.Handler().postDelayed(new java.lang.Runnable({run:function()
{
greenPOS = 20
scan2();
line();
}
}),Speed);
}

function scan2(){
new android.os.Handler().postDelayed(new java.lang.Runnable({run:function()
{
greenPOS = 40
scan3();
line();
}
}),Speed);
}

function scan3(){
new android.os.Handler().postDelayed(new java.lang.Runnable({run:function()
{
greenPOS = 60
scan4();
line();
}
}),Speed);
}

function scan4(){
new android.os.Handler().postDelayed(new java.lang.Runnable({run:function()
{
greenPOS = 80
scan5();
line();
}
}),Speed);
}

function scan5(){
new android.os.Handler().postDelayed(new java.lang.Runnable({run:function()
{
greenPOS = 100
scan6();
line();
}
}),Speed);
}

function scan6(){
new android.os.Handler().postDelayed(new java.lang.Runnable({run:function()
{
greenPOS = 120
scan7();
line();
}
}),Speed);
}

function scan7(){
new android.os.Handler().postDelayed(new java.lang.Runnable({run:function()
{
greenPOS = 140
scan8();
line();
}
}),Speed);
}

function scan8(){
new android.os.Handler().postDelayed(new java.lang.Runnable({run:function()
{
greenPOS = 160
scan9();
line();
}
}),Speed);
}

function scan9(){
new android.os.Handler().postDelayed(new java.lang.Runnable({run:function()
{
greenPOS = 180
scan10();
line();
}
}),Speed);
}

function scan10(){
new android.os.Handler().postDelayed(new java.lang.Runnable({run:function()
{
greenPOS = 200
scan11();
line();
}
}),Speed);
}

function scan11(){
new android.os.Handler().postDelayed(new java.lang.Runnable({run:function()
{
greenPOS = 220
scan12();
line();
}
}),Speed);
}

function scan12(){
new android.os.Handler().postDelayed(new java.lang.Runnable({run:function()
{
greenPOS = 240
scan13();
line();
}
}),Speed);
}


function scan13(){
new android.os.Handler().postDelayed(new java.lang.Runnable({run:function()
{
greenPOS = 260
scan14();
line();
}
}),Speed);
}


function scan14(){
new android.os.Handler().postDelayed(new java.lang.Runnable({run:function()
{
greenPOS = 280
scan15();
line();
}
}),Speed);
}


function scan15(){
new android.os.Handler().postDelayed(new java.lang.Runnable({run:function()
{
greenPOS = 300
line();
scan16();
}
}),Speed);
}

function scan16(){
new android.os.Handler().postDelayed(new java.lang.Runnable({run:function()
{
greenPOS = 320
scan17();
line();
}
}),Speed);
}


function scan17(){
new android.os.Handler().postDelayed(new java.lang.Runnable({run:function()
{
greenPOS = 340
scan18();
line();
}
}),Speed);
}


function scan18(){
new android.os.Handler().postDelayed(new java.lang.Runnable({run:function()
{
greenPOS = 360
scan19();
line();
}
}),Speed);
}


function scan19(){
new android.os.Handler().postDelayed(new java.lang.Runnable({run:function()
{
greenPOS = 380
scan20();
line();
}
}),Speed);
}


function scan20(){
new android.os.Handler().postDelayed(new java.lang.Runnable({run:function()
{
greenPOS = 400
scan21();
line();
}
}),Speed);
}

function scan21(){
new android.os.Handler().postDelayed(new java.lang.Runnable({run:function()
{
greenPOS = 420
scan22();
line();
}
}),Speed);
}

function scan22(){
new android.os.Handler().postDelayed(new java.lang.Runnable({run:function()
{
greenPOS = 440
scan23();
line();
}
}),Speed);
}

function scan23(){
new android.os.Handler().postDelayed(new java.lang.Runnable({run:function()
{
greenPOS = 460
scan24();
line();
}
}),Speed);
}

function scan24(){
new android.os.Handler().postDelayed(new java.lang.Runnable({run:function()
{
greenPOS = 480
scan25();
line();
}
}),Speed);
}


function scan25(){
new android.os.Handler().postDelayed(new java.lang.Runnable({run:function()
{
greenPOS = 500
scan26();
line();
}
}),Speed);
}

function scan26(){
new android.os.Handler().postDelayed(new java.lang.Runnable({run:function()
{
greenPOS = 520
scan27();
line();
}
}),Speed);
}

function scan27(){
new android.os.Handler().postDelayed(new java.lang.Runnable({run:function()
{
greenPOS = 540
scan28();
line();
}
}),Speed);
}

function scan28(){
new android.os.Handler().postDelayed(new java.lang.Runnable({run:function()
{
greenPOS = 560
scan29();
line();
}
}),Speed);
}

function scan29(){
new android.os.Handler().postDelayed(new java.lang.Runnable({run:function()
{
greenPOS = 580
scan30();
line();
}
}),Speed);
}

function scan30(){
new android.os.Handler().postDelayed(new java.lang.Runnable({run:function()
{
greenPOS = 600
scan31();
line();
}
}),Speed);
}

function scan31(){
new android.os.Handler().postDelayed(new java.lang.Runnable({run:function()
{
greenPOS = 620
scan32();
line();
}
}),Speed);
}

function scan32(){
new android.os.Handler().postDelayed(new java.lang.Runnable({run:function()
{
greenPOS = 640
scan33();
line();
}
}),Speed);
}

function scan33(){
new android.os.Handler().postDelayed(new java.lang.Runnable({run:function()
{
greenPOS = 660
scan34();
line();
}
}),Speed);
}

function scan34(){
new android.os.Handler().postDelayed(new java.lang.Runnable({run:function()
{
greenPOS = 680
scan35();
line();
}
}),Speed);
}

function scan35(){
new android.os.Handler().postDelayed(new java.lang.Runnable({run:function()
{
greenPOS = 700
activation5.dismiss();
}
}),Speed);
}



//scanning
function scanning(){
new android.os.Handler().postDelayed(new java.lang.Runnable({run:function()
{
activation1.dismiss();
active2();
welcomename();
activesss0();
}
}),4500);
}

///
function active1(){

 var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();

    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var active1Layout = new android.widget.LinearLayout(ctx);
            var active1Scroll = new android.widget.ScrollView(ctx);
            var active1Layout1 = new android.widget.LinearLayout(ctx);
            active1Layout.setOrientation(1);
            active1Layout1.setOrientation(1);

            active1Scroll.addView(active1Layout);
            active1Layout1.addView(active1Scroll);


var button = new android.widget.Button(ctx);
            button.setText("scanning");
 button.setTextColor(android.graphics.Color.RED);
            button.setWidth(60);
            button.setHeight(60);
button.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
 active1Layout.addView(button);

	                  activation1 = new android.widget.PopupWindow(active1Layout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/3, ctx.getWindowManager().getDefaultDisplay().getHeight()/5);
activation1.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(161,0,0,0))); 
            activation1.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.CENTER, 0, 0);
ModPE.showTipMessage('§6By');
        }catch(error){
            print("Project X v2 FOUND " + error+"ERRORS");
        }
    }}));
}
///

//welcome player
function welcomename(){
new android.os.Handler().postDelayed(new java.lang.Runnable({run:function()
{
activation2.dismiss();
starter()
}
}),2000);
}

function activesss0(){
new android.os.Handler().postDelayed(new java.lang.Runnable({run:function()
{
activesss1();
active2b();
}
}),130);
}

function activesss1(){
new android.os.Handler().postDelayed(new java.lang.Runnable({run:function()
{
activation2b.dismiss();
activesss2();
}
}),130);
}

function activesss2(){
new android.os.Handler().postDelayed(new java.lang.Runnable({run:function()
{
active2b();
activesss3();
}
}),130);
}

function activesss3(){
new android.os.Handler().postDelayed(new java.lang.Runnable({run:function()
{
activation2b.dismiss();
activesss4();
}
}),130);
}

function activesss4(){
new android.os.Handler().postDelayed(new java.lang.Runnable({run:function()
{
active2b();
activesss5();
}
}),130);
}

function activesss5(){
new android.os.Handler().postDelayed(new java.lang.Runnable({run:function()
{
activation2b.dismiss();
activesss6();
}
}),130);
}

function activesss6(){
new android.os.Handler().postDelayed(new java.lang.Runnable({run:function()
{
active2b();
activesss7();
}
}),130);
}

function activesss7(){
new android.os.Handler().postDelayed(new java.lang.Runnable({run:function()
{
activation2b.dismiss();
}
}),130);
}
///

            function active2(){

 var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();

    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var active2Layout = new android.widget.LinearLayout(ctx);
            var active2Scroll = new android.widget.ScrollView(ctx);
            var active2Layout1 = new android.widget.LinearLayout(ctx);
            active2Layout.setOrientation(1);
            active2Layout1.setOrientation(1);

            active2Scroll.addView(active2Layout);
            active2Layout1.addView(active2Scroll);


var button = new android.widget.Button(ctx);
            button.setText("Sukses !!!");
 button.setTextColor(android.graphics.Color.RED);
            button.setWidth(60);
            button.setHeight(60);
button.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
 active2Layout.addView(button);

	                  activation2 = new android.widget.PopupWindow(active2Layout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/3, ctx.getWindowManager().getDefaultDisplay().getHeight()/5);
activation2.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(161,0,0,0))); 
            activation2.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.CENTER, 0, 0);
ModPE.showTipMessage('§6GoogleX');
        }catch(error){
            print("Project X v2 FOUND " + error+"ERRORS");
        }
    }}));
}

function active2b(){

 var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();

    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var active2bLayout = new android.widget.LinearLayout(ctx);
            var active2bScroll = new android.widget.ScrollView(ctx);
            var active2bLayout1 = new android.widget.LinearLayout(ctx);
            active2bLayout.setOrientation(1);
            active2bLayout1.setOrientation(1);

            active2bScroll.addView(active2bLayout);
            active2bLayout1.addView(active2bScroll);


var button = new android.widget.Button(ctx);
            button.setText("Suksess !!!");
 button.setTextColor(android.graphics.Color.BLUE);
            button.setWidth(60);
            button.setHeight(60);
button.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
 active2bLayout.addView(button);

	                  activation2b = new android.widget.PopupWindow(active2bLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/3, ctx.getWindowManager().getDefaultDisplay().getHeight()/5);
activation2b.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(0,0,0,0))); 
            activation2b.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.CENTER | android.view.Gravity.CENTER, 0, 0);
        }catch(error){
            print("Project X v2 FOUND " + error+"ERRORS");
        }
    }}));
}




///
function active5(){

 var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();

    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var active5Layout = new android.widget.LinearLayout(ctx);
            var active5Scroll = new android.widget.ScrollView(ctx);
            var active5Layout1 = new android.widget.LinearLayout(ctx);
            active5Layout.setOrientation(1);
            active5Layout1.setOrientation(1);

            active5Scroll.addView(active5Layout);
            active5Layout1.addView(active5Scroll);


	                  activation5 = new android.widget.PopupWindow(active5Layout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/25, ctx.getWindowManager().getDefaultDisplay().getHeight());
activation5.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(200,0,200,0))); 
            activation5.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.LEFT | android.view.Gravity.CENTER, greenPOS, 0);
        }catch(error){
            print("Project X v2 FOUND " + error+"ERRORS");
        }
    }}));
}



 function starter() {
ctx.runOnUiThread(new Runnable({ run: function() {
	try {
		var menuBtn = new android.widget.ImageButton(ctx);
		menuBtn.setImageBitmap(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(cmdd0,0), 0, android.util.Base64.decode(cmdd0,0).length));
		menuBtn.setOnClickListener(new View.OnClickListener({
			onClick: function(viewarg){
				ctx.getSystemService(android.content.Context.VIBRATOR_SERVICE).vibrate(37);                 
                 
					Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.chestopen", 1, 1);
					if(gunUI != null){
                        gunUI.dismiss();
						gunUI = null;
                    }
                    if(flyUI != null){
                        flyUI.dismiss();
						flyUI = null;
                    }
					if(controlUI != null){
						controlUI.dismiss();
						controlUI = null;
					}
					mainMenu();
					close();
      LEFTMenu();
RIGHTMenu();
                }
            }));	menuBtn.setOnLongClickListener(new android.view.View.OnLongClickListener() {
					onLongClick: function(v,t) {
						pressed=true;
						android.widget.Toast.makeText(ctx, "Drag the button to move it", 1).show();
						ctx.getSystemService(android.content.Context.VIBRATOR_SERVICE).vibrate(37);
						return true;
					}
				});
		
		menuBtn.setOnTouchListener(new android.view.View.OnTouchListener() {
					onTouch :function(v, e) {
						if(!pressed) {
							mX=e.getX();
							mY=e.getY();
						}
						if(pressed) {
							var action = e.getAction() 
							if(action==2) {
								var X=parseInt(e.getX()-mX)*-1/10;
								var Y=parseInt(e.getY()-mY)*-1/10;
								buttonX += X;
								buttonY += Y;
								GUICC.update(parseInt(buttonX), parseInt(buttonY), -1, -1);
							}
							if(action==1)
								pressed=false;
						}
						return false;
					}
				});
		
		GUICC = new PopupWindow(menuBtn, 75, 75);
		GUICC.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
		GUICC.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.argb(125,66,0,0))); 
		GUICC.showAtLocation(ctx.getWindow().getDecorView(), Gravity.BOTTOM | Gravity.RIGHT, buttonX, buttonY);
		}catch(err){
			clientMessage("e/" + err + " #" + err.lineNumber);
		}
	}}));
}
    
             
           /* starterUI = new android.widget.PopupWindow(layout, dip2px(ctx, 55), dip2px(ctx, 55));
   
 
            starterUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 40);
        }catch(err){
            print("The Image GUI-Button could not be displayed, because: " + err);
        }
    }}));
} */
 
function close(){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var closeLayout = new android.widget.LinearLayout(ctx);
            closeLayout.setOrientation(0);
        var closeBtn = new android.widget.ImageButton(ctx);
			closeBtn.setImageDrawable(ctx.getResources().getDrawable(android.R.drawable.ic_delete));
            closeBtn.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function(viewarg){
ctx.getSystemService(android.content.Context.VIBRATOR_SERVICE).vibrate(37);				Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.chestclosed", 1, 1);
Line2();                    droidPE.dismiss();
                    closeUI.dismiss();
                }
            }));
            closeLayout.addView(closeBtn);
             
            closeUI = new android.widget.PopupWindow(closeLayout, dip2px(ctx,32), dip2px(ctx,32));
            closeUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
        }catch(e){
            print("The X-Button could not be displayed, because: " + e);
        }
    }}));
}

function mainMenu(){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var menuLayout = new android.widget.LinearLayout(ctx);
            var menuScroll = new android.widget.ScrollView(ctx);
            var menuLayout1 = new android.widget.LinearLayout(ctx);
            menuLayout.setOrientation(1);
            menuLayout1.setOrientation(1);
             
            menuScroll.addView(menuLayout);
            menuLayout1.addView(menuScroll);
             
            var layoutParams = new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
                layoutParams.setMargins(dip2px(ctx, 15), 0, 0, 0);

            var pmm= new android.widget.ImageView(ctx);
                pmm.setImageBitmap(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(pmmm,0), 0, android.util.Base64.decode(pmmm,0).length))
                 menuLayout.addView(pmm);
			 
	var titleX = new android.widget.TextView(ctx);
    var Ytitle = new android.widget.TextView(ctx);
          Ytitle.setTextSize(13);
          Ytitle.setText("            Selamat datang " + Player.getName(Player.getEntity()) + "!");

    Ytitle.setTextColor(android.graphics.Color.MAGENTA);
          menuLayout.addView(Ytitle);



	var background1 = new android.graphics.drawable.BitmapDrawable(scaledBackgroundDarkDirtImageDecoded1);
	var scrollText = new android.widget.TextView(ctx);
scrollText.setText("⚠AJModsMCPE V Remake⚠");
scrollText.setTextSize(30);                                                                                  scrollText.setTextColor(android.graphics.Color.RED);
scrollText.setBackgroundDrawable(background1);
scrollText.setEllipsize(android.text.TextUtils.TruncateAt.MARQUEE);
scrollText.setMarqueeRepeatLimit(-1);
scrollText.setSingleLine();
scrollText.setHorizontallyScrolling(true);
scrollText.setSelected(true);

menuLayout.addView(scrollText);



var scrollText = new android.widget.TextView(ctx);
scrollText.setText("Terima kasih sudah memakai AJModsMCPE Remake Edt. Credit to @AJ170_iOS_King");
scrollText.setTextSize(20);                                                                                  scrollText.setTextColor(android.graphics.Color.CYAN);
scrollText.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
scrollText.setEllipsize(android.text.TextUtils.TruncateAt.MARQUEE);
scrollText.setMarqueeRepeatLimit(-1);
scrollText.setSingleLine();
scrollText.setHorizontallyScrolling(true);
scrollText.setSelected(true);

menuLayout.addView(scrollText);


var scrollText = new android.widget.TextView(ctx);
scrollText.setText("⚠Mod List⚠");
scrollText.setTextSize(20);                                                                                  scrollText.setTextColor(android.graphics.Color.WHITE);
scrollText.setBackgroundDrawable(new android.graphics.drawable.GradientDrawable(android.graphics.drawable.GradientDrawable.Orientation.LEFT_RIGHT, [android.graphics.Color.BLUE, android.graphics.Color.CYAN, android.graphics.Color.BLUE]));
scrollText.setEllipsize(android.text.TextUtils.TruncateAt.MARQUEE);
scrollText.setMarqueeRepeatLimit(-1);
scrollText.setSingleLine();
scrollText.setHorizontallyScrolling(true);
scrollText.setSelected(true);

menuLayout.addView(scrollText);
//GREEN CYAN MAGENTA YELLOW RED BLACK
			
var cT47 = new android.widget.Button(ctx);
                cT47.setText("My Facebook");
				cT47.setTextColor(android.graphics.Color.BLACK);
cT47.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(view){
 android.widget.Toast.makeText(ctx,"Opening the URL...",0).show();
						var intentBrowser = new android.content.Intent(ctx);
						intentBrowser.setAction(android.content.Intent.ACTION_VIEW);
						intentBrowser.setData(android.net.Uri.parse("http://www.fb.me/m.rakha.f"));
	ctx.startActivity(intentBrowser)

Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
droidPE.dismiss();
closeUI.dismiss();
				}
}); 
menuLayout.addView(cT47);
			

var cT29 = new android.widget.Button(ctx);
                cT29.setText("Buat mod ini work di server");
				cT29.setTextColor(android.graphics.Color.BLACK);
cT29.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(view){
 android.widget.Toast.makeText(ctx,"Opening the URL...",0).show();
						var intentBrowser = new android.content.Intent(ctx);
						intentBrowser.setAction(android.content.Intent.ACTION_VIEW);
						intentBrowser.setData(android.net.Uri.parse("http://www.mediafire.com/?an8kfbbxk9adlry"));
	ctx.startActivity(intentBrowser)

Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
droidPE.dismiss();
closeUI.dismiss();
				}
}); 
menuLayout.addView(cT29);

/* var cT30 = new android.widget.Button(ctx);
                cT30.setText("Turn Off Change Log");
				cT30.setTextColor(android.graphics.Color.GREEN);
cT30.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(view){
mbd();
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);

				}
}); 
menuLayout.addView(cT30);
 */

var button11 = new android.widget.Switch(ctx);
button11.setText(">Terbang Di Survival");
button11.setTextColor(android.graphics.Color.GREEN);
button11.setChecked(switched11);
button11.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged: function(){
if(!switched11){
switched11 = true;
clientMessage("TDS [§4On§f]");
Player.setCanFly(1);
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
}else{
switched11 = false;
clientMessage("TDS [§4Off§f]");
Player.setCanFly(0);
}
button11.setChecked(switched11);
}
}));
menuLayout.addView(button11)

var button22 = new android.widget.Switch(ctx);
button22.setText(">Hentikan Waktu");
button22.setTextColor(android.graphics.Color.GREEN);
button22.setChecked(switched22);
button22.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged: function(){
if(!switched22){
switched22 = true;
android.widget.Toast.makeText(ctx,new android.text.Html.fromHtml("<b><font color=#FF3200>Perhatian: </b><font color=#000000>Jika Waktu Berhenti Anda Tidak Bisa Bergerak"),0).show();
clientMessage("Waktu Berhenti [§4On§f]");
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);			
ModPE.setGameSpeed(0);
}else{
switched22 = false;
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);			
clientMessage("Waktu Berhenti [§4Off§f]");
ModPE.setGameSpeed(20);
}
button22.setChecked(switched22);
}
}));
menuLayout.addView(button22)

var button25 = new android.widget.Switch(ctx);
button25.setText(">Spiderman");
button25.setTextColor(android.graphics.Color.GREEN);
button25.setChecked(switched25);
button25.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged: function(){
if(switched25 == false) {
switched25 = true;
clientMessage("Spiderman [§4On§f]");
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
}else if(switched25 == true){
switched25 = false;
clientMessage("Spiderman [§4Off§f]");
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
}
}
}));

menuLayout.addView(button25)

var button27 = new android.widget.Switch(ctx);
button27.setText(">Naruto");
button27.setTextColor(android.graphics.Color.GREEN);
button27.setChecked(switched27);
button27.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged: function(){
if(switched27 == false) {
switched27 = true;
clientMessage("Naruto [§4On§f]");
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
}else if(switched27 == true){
switched27 = false;
clientMessage("Naruto [§4Off§f]");
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
}
}
}));

menuLayout.addView(button27)

/* var button28 = new android.widget.Switch(ctx);
button28.setText("Super Jump");
button28.setTextColor(android.graphics.Color.GREEN);
button28.setChecked(mbbb);
button28.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged: function(){
if(!mbbb){   
     print("message board on");
mb();
                  mbbb = true;
}else{
print("message board off");
mbd();
               mbbb = false;
}
}
}));

menuLayout.addView(button28) */

var button29 = new android.widget.Switch(ctx);
button29.setText(">The Flash");
button29.setTextColor(android.graphics.Color.GREEN);
button29.setChecked(switched29);
button29.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged: function(){
if(switched29 == false) {
switched29 = true;
clientMessage("The Flash [§4On§f]");
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
}else if(switched29 == true){
switched29 = false;
clientMessage("The Flash [§4Off§f]");
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
}
}
}));

menuLayout.addView(button29)

var button30 = new android.widget.Switch(ctx);
button30.setText(">Kucing Nyawa 9");
button30.setTextColor(android.graphics.Color.GREEN);
button30.setChecked(switched30);
button30.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged: function(){
if(switched30 == false) {
switched30 = true;
android.widget.Toast.makeText(ctx,new android.text.Html.fromHtml("<b><font color=#FF3200>Saat Anda Jatuh Anda Tidak Merasa Sakit</b>"),0).show();
clientMessage("Nyawa 9 [§4On§f]");
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
}else if(switched30 == true){
switched30 = false;
clientMessage("Nyawa 9 [§4Off§f]");
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
}
}
}));

menuLayout.addView(button30)

var button31 = new android.widget.Switch(ctx);
button31.setText(">Ilmu Kebal");
button31.setTextColor(android.graphics.Color.GREEN);
button31.setChecked(switched31);
button31.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged: function(){
if(switched31 == false) {
switched31 = true;
clientMessage("Ilmu Kebal [§4On§f]");
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
}else if(switched31 == true){
switched31 = false;
clientMessage("Ilmu Kebal [§4Off§f]");
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
}
}
}));

menuLayout.addView(button31)

var button34 = new android.widget.Switch(ctx);
button34.setText(">Kuat Puasa");
button34.setTextColor(android.graphics.Color.GREEN);
button34.setChecked(switched34);
button34.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged:
function(){
if(switched34 == false) {
switched34 = true;
clientMessage("Kuat Puasa [§4On§f]");
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
}else if(switched34 == true){
switched34 = false;
clientMessage("Kuat Puasa [§4Off§f]");
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
}
}
}));
menuLayout.addView(button34)

var button32 = new android.widget.Switch(ctx);
button32.setText(">Panah Sniper");
button32.setTextColor(android.graphics.Color.GREEN);
button32.setChecked(switched32);
button32.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged: function(){
if(switched32 == false) {
switched32 = true;
clientMessage("Panah Sniper [§4On§f]");
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
}else if(switched32 == true){
switched32 = false;
clientMessage("Panah Sniper [§4Off§f]");
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
}
}
}));

menuLayout.addView(button32)

var button35 = new android.widget.Switch(ctx);
button35.setText(">Penambang Handal");
button35.setTextColor(android.graphics.Color.GREEN);
button35.setChecked(switched35);
button35.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged:
function(){
if(switched35 == false) {
switched35 = true;
clientMessage("Penambang Handal [§4On§f]");
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
}else if(switched35 == true){
switched35 = false;
clientMessage("Penambang Handal [§4Off§f]");
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
}
}
}));
menuLayout.addView(button35)

var button41 = new android.widget.Switch(ctx);
button41.setText(">Tunjukan Status Darah Anda");
button41.setTextColor(android.graphics.Color.GREEN);
button41.setChecked(switched41);
button41.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged:
function(){
if(switched41 == false) {
switched41 = true;
clientMessage("Status Darah [§4On§f]");
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
}else if(switched41 == true){
switched41 = false;
clientMessage("Status Darah [§4Off§f]");
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
}
}
}));
menuLayout.addView(button41)

var button42 = new android.widget.Switch(ctx);
button42.setText(">Tonjok Mental");
button42.setTextColor(android.graphics.Color.GREEN);
button42.setChecked(switched42);
button42.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged:
function(){
if(switched42 == false) {
switched42 = true;
clientMessage(">Tonjok Mental [§4On§f]");
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
}else if(switched42 == true){
switched42 = false;
clientMessage("Tonjok Mental [§4Off§f]");
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
}
}
}));
menuLayout.addView(button42)

var button43 = new android.widget.Switch(ctx);
button43.setText(">1 Hit");
button43.setTextColor(android.graphics.Color.GREEN);
button43.setChecked(switched43);
button43.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged:
function(){
if(switched43 == false) {
switched43 = true;
clientMessage("1 Hit [§4On§f]");
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
}else if(switched43 == true){
switched43 = false;
clientMessage("1 Hit [§4Off§f]");
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
}
}
}));
menuLayout.addView(button43)

var button55 = new android.widget.Switch(ctx);
button55.setText(">Lumba-lumba");
button55.setTextColor(android.graphics.Color.GREEN);
button55.setChecked(switched52);
button55.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged:
function(){
if(switched52 == false) {
switched52 = true;
clientMessage("Lumba-lumba [§4On§f]");
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
}else if(switched52 == true){
switched52 = false;
clientMessage("Lumba-lumba [§4Off§f]");
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
}
}
}));
menuLayout.addView(button55);

var button56 = new android.widget.Switch(ctx);
button56.setText(">Auto Float");
button56.setTextColor(android.graphics.Color.GREEN);
button56.setChecked(switched53);
button56.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged:
function(){
if(switched53 == false) {
switched53 = true;
clientMessage("Auto Float [§4On§f]");
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
}else if(switched53 == true){
switched53 = false;
clientMessage("Auto Float [§4Off§f]");
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
}
}
}));
menuLayout.addView(button56);

var button57 = new android.widget.Switch(ctx);
button57.setText(">Glide Up");
button57.setTextColor(android.graphics.Color.GREEN);
button57.setChecked(switched54);
button57.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged:
function(){
if(switched54 == false) {
switched54 = true;
clientMessage("§4Lompat!!!");
clientMessage("Glide Up [§4On§f]");
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
}else if(switched54 == true){
switched54 = false;
clientMessage("Glide Up [§4Off§f]");
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
}
}
}));
menuLayout.addView(button57);
/* textview = android.widget.TextView(ctx);            textview.setText("Jump Height Changer"); 
textview.setTextSize(10);                                                                                  textview.setTextColor(android.graphics.Color.GREEN);
textview.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       

menuLayout.addView(textview);

var sbp3 = new android.widget.SeekBar(ctx);
sbp3.setMax(3);
sbp3.setProgress(sbpProgress3);
sbp3.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener() {
onStopTrackingTouch: function(view)
{
sbpProgress3 = sbp3.getProgress();
if(sbpProgress3==0)
{
Entity.removeEffect(getPlayerEnt(),8);
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
clientMessage("Jump Height Has Been §4Reset");
}
if(sbpProgress3==1)
{
Entity.addEffect(getPlayerEnt(),8,10000000,1);
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
clientMessage("Jump Height Set To§4 2 Blocks");
}
if(sbpProgress3==2)
{
Entity.addEffect(getPlayerEnt(),8,10000000,2);
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
clientMessage("Jump Height Set To§4 3 Blocks High");
}
if(sbpProgress3==3)
{
Entity.addEffect(getPlayerEnt(),8,10000000,3);
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
clientMessage("Jump Height Set To§4 5 Blocks");
}
}
});
        menuLayout.addView(sbp3);
 */

var button26 = new android.widget.Switch(ctx);
button26.setText(">Tunjukin Koordinat");
button26.setTextColor(android.graphics.Color.GREEN);
button26.setChecked(switched26);
button26.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged: function(){
if(switched26 == false) {
switched26 = true;
clientMessage("Koordinat [§4On§f]");
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
}else if(switched26 == true){
switched26 = false;
clientMessage("Koordinat [§4Off§f]");
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
}
}
}));

menuLayout.addView(button26)



var button37 = new android.widget.Switch(ctx);
button37.setText(">Real Time Display (Player Info)");
button37.setTextColor(android.graphics.Color.GREEN);
button37.setChecked(switched37);
button37.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged:
function(){
if(switched37 == false) {
switched37 = true;
clientMessage("Real Time Display [§4On§f]");
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
}else if(switched37 == true){
switched37 = false;
clientMessage("Real Time Display [§4Off§f]");
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
}
}
}));
menuLayout.addView(button37);

var button36 = new android.widget.Switch(ctx);
button36.setText(">Pagi Terus");
button36.setTextColor(android.graphics.Color.GREEN);
button36.setChecked(switched36);
button36.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged:
function(){
if(switched36 == false) {
switched36 = true;
clientMessage("Pagi Terus [§4On§f]");
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
}else if(switched36 == true){
switched36 = false;
clientMessage("Pagi Terus [§4Off§f]");
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
}
}
}));
menuLayout.addView(button36);






var button19 = new android.widget.Switch(ctx);
button19.setText(">Layar Terbalik");
button19.setTextColor(android.graphics.Color.GREEN);
button19.setChecked(switched19);
button19.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged: function(){
if(!switched19){
switched19 = true;
clientMessage("§4PUSING WOIIIII!!!!");
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);			
ModPE.setFov(300);
}else{
switched19 = false;
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);			
clientMessage("§4...");
ModPE.resetFov();
}
button19.setChecked(switched19);
}
}));
menuLayout.addView(button19)

var button20 = new android.widget.Switch(ctx);
button20.setText(">Slow Motion");
button20.setTextColor(android.graphics.Color.GREEN);
button20.setChecked(switched20);
button20.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged: function(){
if(!switched20){
switched20 = true;
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);			
clientMessage("Slow Motion §4Activated");
ModPE.setGameSpeed(10);
}else{
switched20 = false;
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);			
clientMessage("Slow Motion §4DeActivated");
ModPE.setGameSpeed(20);
}
button20.setChecked(switched20);
}
}));
menuLayout.addView(button20)

var button21 = new android.widget.Switch(ctx);
button21.setText(">Pro Mod");
button21.setTextColor(android.graphics.Color.GREEN);
button21.setChecked(switched21);
button21.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged: function(){
if(!switched21){
switched21 = true;
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);			
clientMessage("Pro Mod §4Activated");
ModPE.setFov(120);
}else{
switched21 = false;
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);			
clientMessage("Pro Mod §4DeActivated");
ModPE.resetFov();
}
button21.setChecked(switched21);
}
}));
menuLayout.addView(button21)

var button23 = new android.widget.Switch(ctx);
button23.setText(">Hantu");
button23.setTextColor(android.graphics.Color.GREEN);
button23.setChecked(switched23);
button23.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged: function(){
if(!switched23){
switched23 = true;
android.widget.Toast.makeText(ctx,new android.text.Html.fromHtml("<b><font color=#000000>Anda Bisa Menembus Tembok</b>"),0).show();
clientMessage("Hantu [§4On§f]");
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
Entity.setCollisionSize(Player.getEntity(), 0, 0);
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
}else{
switched23 = false;
Entity.setCollisionSize(Player.getEntity(), 0.6, 1.8);
clientMessage("Hantu [§4Off§f]");
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
}
button23.setChecked(switched23);
}
}));
menuLayout.addView(button23)

var button33 = new android.widget.Switch(ctx);
button33.setText(">Derp Mode");
button33.setTextColor(android.graphics.Color.GREEN);
button33.setChecked(switched33);
button33.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged:
function(){
if(switched33 == false) {
switched33 = true;
clientMessage("Derp Mode [§4On§f]");
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
}else if(switched33 == true){
switched33 = false;
clientMessage("Derp Mode [§4Off§f]");
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
}
}
}));
menuLayout.addView(button33)

var button38 = new android.widget.Switch(ctx);
button38.setText(">Partikel");
button38.setTextColor(android.graphics.Color.GREEN);
button38.setChecked(switched38);
button38.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged:
function(){
if(switched38 == false) {
switched38 = true;
clientMessage("Partikel [§4On§f]");
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
}else if(switched38 == true){
switched38 = false;
clientMessage("Partikel [§4Off§f]");
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
}
}
}));
menuLayout.addView(button38)

var button39 = new android.widget.Switch(ctx);
button39.setText(">Jatuh dengan lambat");
button39.setTextColor(android.graphics.Color.GREEN);
button39.setChecked(switched39);
button39.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged:
function(){
if(switched39 == false) {
switched39 = true;
clientMessage("Jatuh lambat [§4On§f]");
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
}else if(switched39 == true){
switched39 = false;
clientMessage("Jatuh lambat [§4Off§f]");
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
}
}
}));
menuLayout.addView(button39)

var button40 = new android.widget.Switch(ctx);
button40.setText(">Auto Switch");
button40.setTextColor(android.graphics.Color.GREEN);
button40.setChecked(switched40);
button40.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged:
function(){
if(switched40 == false) {
switched40 = true;
clientMessage("Auto Switch [§4On§f]");
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
}else if(switched40 == true){
switched40 = false;
clientMessage("Auto Switch [§4Off§f]");
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
}
}
}));
menuLayout.addView(button40)



var button46 = new android.widget.Switch(ctx);
button46.setText(">Colored Name");
button46.setTextColor(android.graphics.Color.GREEN);
button46.setChecked(switched46);
button46.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged:
function(){
if(switched46 == false) {
switched46 = true;
clientMessage("Colored Name [§4On§f]");
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
}else if(switched46 == true){
switched46 = false;
clientMessage("Colored Name [§4Off§f]");
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
}
}
}));
menuLayout.addView(button46)

var button47 = new android.widget.Switch(ctx);
button47.setText(">Point To Kill");
button47.setTextColor(android.graphics.Color.GREEN);
button47.setChecked(pointKill);
button47.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged:
function(){
if(pointKill == false) {
pointKill = true;
clientMessage("Point To Kill [§4On§f]");
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
}else if(pointKill == true){
pointKill = false;
clientMessage("Point To Kill [§4Off§f]");
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
}
}
}));
menuLayout.addView(button47)

var button48 = new android.widget.Switch(ctx);
button48.setText(">Freeze On Point");
button48.setTextColor(android.graphics.Color.GREEN);
button48.setChecked(entiStop);
button48.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged:
function(){
if(entiStop == false) {
entiStop = true;
clientMessage("Freeze On Point [§4On§f]");
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
}else if(entiStop == true){
entiStop = false;
clientMessage("Freeze On Point [§4Off§f]");
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
}
}
}));
menuLayout.addView(button48)

/*var button49 = new android.widget.Switch(ctx);
button49.setText(">Coming Soon");
button49.setTextColor(android.graphics.Color.MAGENTA);
button49.setChecked(tp);
button49.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged:
function(){
if(tp == false) {
tp = true;
clientMessage("Coming Soon");
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
}else if(tp == true){
tp = false;
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
}
}
}));
menuLayout.addView(button49)*/

var button50 = new android.widget.Switch(ctx);
button50.setText(">Kritikal Hit");
button50.setTextColor(android.graphics.Color.GREEN);
button50.setChecked(autocrit);
button50.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged:
function(){
if(autocrit == false) {
autocrit = true;
clientMessage("Kritikal Hit [§4On§f]");
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
}else if(autocrit == true){
autocrit = false;
clientMessage("Kritikal Hit [§4Off§f]");
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
}
}
}));
menuLayout.addView(button50)

var button51 = new android.widget.Switch(ctx);
button51.setText(">Obor");
button51.setTextColor(android.graphics.Color.GREEN);
button51.setChecked(switched48);
button51.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged:
function(){
if(switched48 == false) {
switched48 = true;
clientMessage("Obor [§4On§f]");
android.widget.Toast.makeText(ctx,new android.text.Html.fromHtml("<b><font color=#29FF00>Pegang </b><font color=#FFC000>Torch !!!"),0).show();
addItemInventory(50,2,0);
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
}else if(switched48 == true){
switched48 = false;
clientMessage("Obor [§4Off§f]");
android.widget.Toast.makeText(ctx,new android.text.Html.fromHtml("<b><font color=#FFFC00>Bergerak untuk membuat </b><font color=#29FF00>cahayanya hilang"),0).show();
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
}
}
}));
menuLayout.addView(button51)

var button52 = new android.widget.Switch(ctx);
button52.setText(">Darah");
button52.setTextColor(android.graphics.Color.GREEN);
button52.setChecked(switched49);
button52.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged:
function(){
if(switched49 == false) {
switched49 = true;
clientMessage("Darah [§4On§f]");
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
}else if(switched49 == true){
switched49 = false;
clientMessage("Darah [§4Off§f]");
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
}
}
}));
menuLayout.addView(button52)

var button53 = new android.widget.Switch(ctx);
button53.setText(">Kill Aura");
button53.setTextColor(android.graphics.Color.GREEN);
button53.setChecked(switched50);
button53.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged:
function(){
if(switched50 == false) {
switched50 = true;
clientMessage("Kill Aura [§4On§f]");
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
}else if(switched50 == true){
switched50 = false;
clientMessage("Kill Aura [§4Off§f]");
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
}
}
}));
menuLayout.addView(button53)

var button54 = new android.widget.Switch(ctx);
button54.setText(">Freeze Aura");
button54.setTextColor(android.graphics.Color.GREEN);
button54.setChecked(switched51);
button54.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged:
function(){
if(switched51 == false) {
switched51 = true;
clientMessage("Freeze Aura [§4On§f]");
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
}else if(switched51 == true){
switched51 = false;
clientMessage("Freeze Aura [§4Off§f]");
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
}
}
}));
menuLayout.addView(button54)



textview = android.widget.TextView(ctx);            
textview.setText("⚠Setelan Game⚠"); 
textview.setTextSize(20);  
textview.setTextColor(android.graphics.Color.WHITE);
textview.setGravity(Gravity.CENTER);
textview.setBackgroundDrawable(new android.graphics.drawable.GradientDrawable(android.graphics.drawable.GradientDrawable.Orientation.LEFT_RIGHT, [android.graphics.Color.RED, android.graphics.Color.MAGENTA, android.graphics.Color.RED]));       

menuLayout.addView(textview);

			var back = new android.widget.Button(ctx);
    back.setText("Arrow Trail:" + name + " ");
    back.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
    back.setTextColor(android.graphics.Color.BLUE);
    back.setOnClickListener(new android.view.View.OnClickListener() {
				onClick: function(v) {
    Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.click", 100, 30);
    if (selected <  31){
    selected=selected+1
    }
    else {
    selected=0
    }
    if (selected==0) name=" AngryVillager "
    if (selected==1) name=" Bubble "
    if (selected==2) name=" Cloud "
    if (selected==3) name=" Crit "
    if (selected==4) name=" DripLava "
    if (selected==5) name=" DripWater "
    if (selected==6) name=" Enchantmenttable "
    if (selected==7) name=" FallingDust "
    if (selected==8) name=" Flame "
    if (selected==9) name=" HappyVillager "
    if (selected==10) name=" Heart "
    if (selected==11) name=" Hugeexplosion "
    if (selected==12) name=" HugeexplosionSeed "
    if (selected==13) name=" Ink "
    if (selected==14) name=" Largeexplode "
    if (selected==15) name=" Lava "
    if (selected==16) name=" MobFlame "
    if (selected==17) name=" Note "
    if (selected==18) name=" Portal "
    if (selected==19) name=" RainSplash "
    if (selected==20) name=" Redstone "
    if (selected==21) name=" Slime "
    if (selected==22) name=" Smoke "
    if (selected==23) name=" Smoke2 "
    if (selected==24) name=" Snowballpoof "
    if (selected==25) name=" Spell "
    if (selected==26) name=" Spell2 "
    if (selected==27) name=" Spell3 "
    if (selected==28) name=" Splash "
    if (selected==29) name=" SuspendedTown "
    if (selected==30) name=" Terrain "
    if (selected==31) name=" WaterWake "
    
    back.setText("Arrow Trail:" + name + " ");
    

				}
			});
			
			menuLayout.addView(back);

var jumpBtn = new android.widget.TextView(ctx);
			jumpBtn.setTextSize(18);
			jumpBtn.setText("Ketinggian Melompat: " + jumpHeight + " Blocks");
jumpBtn.setTextColor(android.graphics.Color.BLUE);	jumpBtn.setLayoutParams(layoutParams);
			jumpBtn.setOnClickListener(new android.view.View.OnClickListener({
				onClick: function(viewarg){
					if(jumpHeight=="1"){
						jumpHeight = "2";
                        
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);                        jumpVel = 0.5;
					}
					else if(jumpHeight=="2"){
						jumpHeight = "3";
						Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
						jumpVel = 0.7;
					}
					else if(jumpHeight=="3"){
						jumpHeight = "4";
						Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
						jumpVel = 0.8;
					}
					else if(jumpHeight=="4"){
						jumpVel = 0.9;
						Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
						jumpHeight = "5";
					}
					else if(jumpHeight=="5"){
						jumpVel = 1;
						Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
						jumpHeight = "6";
					}
					else if(jumpHeight=="6"){
						jumpHeight = "1";
					Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
					}
					jumpBtn.setText("Ketinggian Melompat: " + jumpHeight + " Blocks");
jumpBtn.setTextColor(android.graphics.Color.BLUE);				
				}
			}));
			menuLayout.addView(jumpBtn);

textview = android.widget.TextView(ctx);            textview.setText(">Game Speed Changer"); 
textview.setTextSize(10);                                                                                  textview.setTextColor(android.graphics.Color.BLUE);
textview.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       

menuLayout.addView(textview);

var sbp1 = new android.widget.SeekBar(ctx);
sbp1.setMax(3);
sbp1.setProgress(sbpProgress1);
sbp1.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener() {
onStopTrackingTouch: function(view)
{
sbpProgress1 = sbp1.getProgress();
if(sbpProgress1==0)
{
ModPE.setGameSpeed(20);
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
clientMessage("Speed Set To §4Normal");
}
if(sbpProgress1==1)
{
ModPE.setGameSpeed(30);
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
clientMessage("Speed Set To §4+20%");
}
if(sbpProgress1==2)
{
ModPE.setGameSpeed(40);
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
clientMessage("Speed Set To §4+30%");
}
if(sbpProgress1==3)
{
ModPE.setGameSpeed(50);
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
clientMessage("Speed Set To §4+40%");
}
}
});
        menuLayout.addView(sbp1);


textview = android.widget.TextView(ctx);            textview.setText(">Zoom Changer"); 
textview.setTextSize(10);                                                                                  textview.setTextColor(android.graphics.Color.BLUE);
textview.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       

menuLayout.addView(textview);

var sbp2 = new android.widget.SeekBar(ctx);
sbp2.setMax(3);
sbp2.setProgress(sbpProgress2);
sbp2.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener() {
onStopTrackingTouch: function(view)
{
sbpProgress2 = sbp2.getProgress();
if(sbpProgress2==0)
{
ModPE.resetFov();
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
clientMessage("Zoom Set To §4Normal");
}
if(sbpProgress2==1)
{
ModPE.setFov(40);
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
clientMessage("Zoom Set To §4+20%");
}
if(sbpProgress2==2)
{
ModPE.setFov(30);
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
clientMessage("Zoom Set To §4+40%");
}
if(sbpProgress2==3)
{
ModPE.setFov(20);
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
clientMessage("Zoom Set To §4+60%");
}
}
});
        menuLayout.addView(sbp2);





textview = android.widget.TextView(ctx);            textview.setText("--------------------------------"); 
textview.setTextSize(20);                                                                                  textview.setTextColor(android.graphics.Color.GRAY);
textview.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       

menuLayout.addView(textview);

var cT40 = new android.widget.Button(ctx);
                cT40.setText("Menu Ekstra");
				cT40.setTextColor(android.graphics.Color.BLACK);

cT40.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(view){
BackMenu();
mb4();
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
droidPE.dismiss();
closeUI.dismiss();
LEFTmenu.dismiss();
RIGHTmenu.dismiss();
LEFTMenu();
RIGHTMenu();
				}
}); 
menuLayout.addView(cT40);


var scrollText = new android.widget.TextView(ctx);
scrollText.setText("AJModsMCPE Remake Edt. "+version);
scrollText.setTextSize(20);                                                                                  scrollText.setTextColor(android.graphics.Color.CYAN);
scrollText.setBackgroundDrawable(new android.graphics.drawable.GradientDrawable(android.graphics.drawable.GradientDrawable.Orientation.LEFT_RIGHT, [android.graphics.Color.BLUE, android.graphics.Color.TRANSPARENT, android.graphics.Color.CYAN]));
scrollText.setEllipsize(android.text.TextUtils.TruncateAt.MARQUEE);
scrollText.setMarqueeRepeatLimit(-1);
scrollText.setSingleLine();
scrollText.setHorizontallyScrolling(true);
scrollText.setSelected(true);

menuLayout.addView(scrollText);
   
var cT33 = new android.widget.Button(ctx);
                cT33.setText("Credit");
				cT33.setTextColor(android.graphics.Color.BLACK);

cT33.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(view){
mb3();
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
droidPE.dismiss();
closeUI.dismiss();
LEFTmenu.dismiss();
RIGHTmenu.dismiss();
				}
}); 
menuLayout.addView(cT33);

   
textview = android.widget.TextView(ctx);            textview.setText("--------------------------------"); 
textview.setTextSize(20);                                                                                  textview.setTextColor(android.graphics.Color.GRAY);
textview.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       

menuLayout.addView(textview);

textview = android.widget.TextView(ctx);            textview.setText("How Many Bugs Are Patched"); 
textview.setTextSize(10);                                                                                  textview.setTextColor(android.graphics.Color.WHITE);
textview.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));       

menuLayout.addView(textview);

var bar = new android.widget.RatingBar(ctx, null, android.R.attr.progressBarStyleHorizontal);
    bar.setMax(100);
    bar.setProgress(82);
   bar.setBackgroundDrawable(new android.graphics.drawable.GradientDrawable(android.graphics.drawable.GradientDrawable.Orientation.LEFT_RIGHT, [android.graphics.Color.GREEN, android.graphics.Color.YELLOW, android.graphics.Color.GREEN]));
  android.widget.Toast.makeText(ctx,new android.text.Html.fromHtml("<b><font color=#FFFC00>Trying to be a hacker</b>"),0).show(); menuLayout.addView(bar);




//coding   
 var cmd= new android.widget.ImageView(ctx);
   cmd.setImageBitmap(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(cmdd,0), 0, android.util.Base64.decode(cmdd,0).length))
  menuLayout.addView(cmd)

 var cmd= new android.widget.ImageView(ctx);
   cmd.setImageBitmap(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(cmdd4,0), 0, android.util.Base64.decode(cmdd4,0).length))
  menuLayout.addView(cmd)

 
 var cmd= new android.widget.ImageView(ctx);
   cmd.setImageBitmap(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(cmdd3,0), 0, android.util.Base64.decode(cmdd3,0).length))
  menuLayout.addView(cmd)

var cmd= new android.widget.ImageView(ctx);
   cmd.setImageBitmap(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(cmdd02,0), 0, android.util.Base64.decode(cmdd02,0).length))
  menuLayout.addView(cmd)

var cmd= new android.widget.ImageView(ctx);
   cmd.setImageBitmap(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(cmdd03,0), 0, android.util.Base64.decode(cmdd03,0).length))
  menuLayout.addView(cmd)
  
 var cmd= new android.widget.ImageView(ctx);
   cmd.setImageBitmap(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(cmdr1,0), 0, android.util.Base64.decode(cmdr1,0).length))
  menuLayout.addView(cmd)


 var cmd= new android.widget.ImageView(ctx);
   cmd.setImageBitmap(android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(cmdd2,0), 0, android.util.Base64.decode(cmdd2,0).length))
  menuLayout.addView(cmd)


var cT27 = new android.widget.Button(ctx);
                cT27.setText("YouTube AJ");
				cT27.setTextColor(android.graphics.Color.BLUE);
cT27.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(view){
android.widget.Toast.makeText(ctx,"Opening the URL...",0).show();
						var intentBrowser = new android.content.Intent(ctx);
						intentBrowser.setAction(android.content.Intent.ACTION_VIEW);
						intentBrowser.setData(android.net.Uri.parse("https://www.youtube.com/c/AJ170"));
	ctx.startActivity(intentBrowser)

Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
droidPE.dismiss();
closeUI.dismiss();
LEFTmenu.dismiss();
RIGHTmenu.dismiss();
				}
}); 
menuLayout.addView(cT27);

var cT26 = new android.widget.Button(ctx);
                cT26.setText("Twitter");
				cT26.setTextColor(android.graphics.Color.BLUE);
cT26.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(view){
android.widget.Toast.makeText(ctx,"Opening the URL...",0).show();
						var intentBrowser = new android.content.Intent(ctx);
						intentBrowser.setAction(android.content.Intent.ACTION_VIEW);
						intentBrowser.setData(android.net.Uri.parse("https://twitter.com/AJ170_iOS_King?s=09"));
	ctx.startActivity(intentBrowser)

Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
droidPE.dismiss();
closeUI.dismiss();
LEFTmenu.dismiss();
RIGHTmenu.dismiss();
				}
}); 
menuLayout.addView(cT26);

var cT28 = new android.widget.Button(ctx);
                cT28.setText("KiK");
				cT28.setTextColor(android.graphics.Color.BLUE);
cT28.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(view){
android.widget.Toast.makeText(ctx,"Opening the URL...",0).show();
						var intentBrowser = new android.content.Intent(ctx);
						intentBrowser.setAction(android.content.Intent.ACTION_VIEW);
						intentBrowser.setData(android.net.Uri.parse("http://kik.me/AJ170.iPA"));
	ctx.startActivity(intentBrowser)

Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
droidPE.dismiss();
closeUI.dismiss();
LEFTmenu.dismiss();
RIGHTmenu.dismiss();
				}
}); 
menuLayout.addView(cT28);

//NEW (GLX)
var cTL01 = new android.widget.Button(ctx);
                cTL01.setText("YouTube GLX");
				cTL01.setTextColor(android.graphics.Color.RED);
cTL01.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(view){
android.widget.Toast.makeText(ctx,"Opening the URL...",0).show();
						var intentBrowser = new android.content.Intent(ctx);
						intentBrowser.setAction(android.content.Intent.ACTION_VIEW);
						intentBrowser.setData(android.net.Uri.parse("https://www.youtube.com/channel/UCPcm_3g8XBPbXNHLfwvX9zQ"));
	ctx.startActivity(intentBrowser)

Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
droidPE.dismiss();
closeUI.dismiss();
LEFTmenu.dismiss();
RIGHTmenu.dismiss();
				}
}); 
menuLayout.addView(cTL01);
//ChangeLog (GLX)
var cTC01 = new android.widget.Button(ctx);
                cTC01.setText("Changelog");
				cTC01.setTextColor(android.graphics.Color.GRAY);
cTC01.setOnClickListener(new android.view.View.OnClickListener(){
                onClick: function(view){
changeLog();
				}
}); 
menuLayout.addView(cTC01);

//Menu Background Settings
                       var background = new android.graphics.drawable.BitmapDrawable(scaledBackgroundDarkDirtImageDecoded);
                           background.setTileModeXY(android.graphics.Shader.TileMode.REPEAT, android.graphics.Shader.TileMode.REPEAT);
                       droidPE = new android.widget.PopupWindow(menuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/2, ctx.getWindowManager().getDefaultDisplay().getHeight());
			           droidPE.setBackgroundDrawable(background); droidPE.setAnimationStyle(android.R.style.Animation_Translucent);
droidPE.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP, 0, 0);
        }catch(error){
            print("The menu could not be displayed, because: " + error);
        }
    }}));
}

function leaveGame(){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        if(starterUI != null){
            starterUI.dismiss();
			starterUI = null;
        }
        if(closeUI != null){
            closeUI.dismiss();
			closeUI = null;
        }
        if(GUICC != null){
            GUICC.dismiss();
			GUICC = null;
        }
        if(activatedGUI==true)
{
GUI.dismiss();
GUI2.dismiss();
GUI3.dismiss();
GUI4.dismiss();
activatedGUI=false;
}
        
  if(droidPE != null){
            droidPE.dismiss();
			droidPE = null;
        }
        
        
  if(mp != null){
       mp.stop();
			mp = null;
        }
        if(gunUI != null){
            gunUI.dismiss();
			gunUI = null;
        }
        if(flyUI != null){
            flyUI.dismiss();
			flyUI = null;
        }
		if(controlUI != null){
			controlUI.dismiss();
			controlUI = null;
		}
    try {
		log.write("leave game");
		mapWindow.hide();
		if (map_state) {
			changeMapState();
		}
		log.write("shutdown thread pool");
		pool.shutdownNow();
		startMapControl = true;
		X = undefined;
		entities = [];
		chests = [];
	} catch (e) {
		log.e("leaveGame", e);
	}

    
    }}));
    }
    


var backgroundDarkDirtImage1 = "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"
var backgroundDarkDirtImageDecoded1 = new android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(backgroundDarkDirtImage1, 0), 0, android.util.Base64.decode(backgroundDarkDirtImage1, 0).length);
var scaledBackgroundDarkDirtImageDecoded1 = new android.graphics.Bitmap.createBitmap(backgroundDarkDirtImageDecoded1);



//Background
var backgroundDarkDirtImage = "/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gOTAK/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgCAAIAAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A6uiiivzI/TQooooA83ooortOIKKKKACiiigAooooA8/ooorrOQKKKKACiiigAooooA+iKKKK8c9gKKKKAPN6KKK7TiCiiigAooooAKKKKAPP6KKK6zkCiiigAooooAKKKKAPOaKKK7TlCiiigD0aiiiuI6gooooAKKKKACiiigD6Iooorxz2AooooA+d6KKK9g8cKKKKAPoiiiivHPYCiiigAooooAKKKKAPN6KKK7TiCiiigAooooAKKKKAPP6KKK6zkCiiigAooooAKKKKAPoiiiivHPYCiiigDzeiiiu04gooooAKKKKACiiigDz+iiius5AooooAKKKKACiiigDzmiiiu05QooooA9GoooriOoKKKKACiiigAooooA+iKKKK8c9gKKKKAPneiiivYPHCiiigD6Iooorxz2AooooA+d6KKK9g8cKKKKAPQKKKK5DrCiiigD55ooor2DygooooA9GoooriOoKKKKACiiigAooooA85ooortOUKKKKACiiigAooooAKKKKACiiigD0aiiiuI6gooooA85ooortOUKKKKAPoaiiivHPVCiiigDz+iiius5AooooA+iKKKK8c9gKKKKAPN6KKK7TiCiiigD55ooor2DygooooAKKKKACiiigD0aiiiuI6gooooA9AooorkOsKKKKAPnmiiivYPKCiiigD0aiiiuI6gooooAKKKKACiiigDzmiiiu05QooooAKKKKACiiigAooooAKKKKAPRqKKK4jqCiiigDzmiiiu05QooooA+hqKKK8c9UKKKKAPP6KKK6zkCiiigD6Iooorxz2AooooA83ooortOIKKKKAPnmiiivYPKCiiigAooooAKKKKAPs6iiivmj6IKKKKAPneiiivYPHCiiigAooooAKKKKAPOaKKK7TlCiiigD7Oooor5o+iCiiigDzeiiiu04gooooAKKKKACiiigDz+iiius5AooooA+iKKKK8c9gKKKKAPjGiiivpT50KKKKAPRqKKK4jqCiiigAooooAKKKKAPOaKKK7TlCiiigD62ooor6g+UCiiigDYooor8yP00KKKKAPneiiivYPHCiiigD6Iooorxz2AooooA+d6KKK9g8cKKKKACiiigAooooA85ooortOUKKKKAPs6iiivmj6IKKKKAPN6KKK7TiCiiigAooooAKKKKAPP6KKK6zkCiiigD6Iooorxz2AooooA+MaKKK+lPnQooooA9GoooriOoKKKKACiiigAooooA85ooortOUKKKKAPraiiivqD5QKKKKANiiiivzI/TQooooA+d6KKK9g8cKKKKAPQKKKK5DrCiiigDHooor9APz8KKKKAPYKKKK/Mj9NCiiigD53ooor2DxwooooA85ooortOUKKKKAPoaiiivHPVCiiigDz+iiius5AooooA+iKKKK8c9gKKKKAPN6KKK7TiCiiigAooooAKKKKAPP6KKK6zkCiiigDzmiiiu05QooooA9GoooriOoKKKKAPoiiiivHPYCiiigDzeiiiu04gooooA8/ooorrOQKKKKAPQKKKK5DrCiiigDHooor9APz8KKKKAPYKKKK/Mj9NCiiigD53ooor2DxwooooA85ooortOUKKKKAPoaiiivHPVCiiigDz+iiius5AooooA+iKKKK8c9gKKKKAPN6KKK7TiCiiigAooooAKKKKAPP6KKK6zkCiiigDzmiiiu05QooooA9GoooriOoKKKKAPoiiiivHPYCiiigDzeiiiu04gooooA8/ooorrOQKKKKAPQKKKK5DrCiiigDz+iiius5AooooA9AooorkOsKKKKAPSKKKK4jtCiiigD4xooor6U+dCiiigD6Gooorxz1QooooA8/ooorrOQKKKKACiiigAooooA9AooorkOsKKKKAPnmiiivYPKCiiigD0aiiiuI6gooooA+iKKKK8c9gKKKKAPneiiivYPHCiiigD0CiiiuQ6wooooA+eaKKK9g8oKKKKAPRqKKK4jqCiiigD0CiiiuQ6wooooA8/ooorrOQKKKKAPQKKKK5DrCiiigD0iiiiuI7QooooA+MaKKK+lPnQooooA+hqKKK8c9UKKKKAPP6KKK6zkCiiigAooooAKKKKAPQKKKK5DrCiiigD55ooor2DygooooA9GoooriOoKKKKAPoiiiivHPYCiiigD53ooor2DxwooooA9AooorkOsKKKKAPnmiiivYPKCiiigD0aiiiuI6gooooA+iKKKK8c9gKKKKAPjGiiivpT50KKKKAPoaiiivHPVCiiigAooooAKKKKAPP6KKK6zkCiiigD0CiiiuQ6wooooA+eaKKK9g8oKKKKACiiigAooooAKKKKACiiigD0aiiiuI6gooooAKKKKACiiigDzmiiiu05QooooA9GoooriOoKKKKACiiigAooooAKKKKACiiigD6Iooorxz2AooooAKKKKACiiigD4xooor6U+dCiiigD6Gooorxz1QooooAKKKKACiiigDz+iiius5AooooA9AooorkOsKKKKAPnmiiivYPKCiiigAooooAKKKKACiiigAooooA9GoooriOoKKKKACiiigAooooA85ooortOUKKKKAPRqKKK4jqCiiigAooooAKKKKACiiigAooooA+iKKKK8c9gKKKKACiiigAooooA+d6KKK9g8cKKKKACiiigAooooAKKKKACiiigDqKKKK+1PigooooA5eiiivij7UKKKKACiiigAooooA+iKKKK8c9gKKKKACiiigAooooA+d6KKK9g8cKKKKAPoiiiivHPYCiiigAooooAKKKKAPneiiivYPHCiiigD0CiiiuQ6wooooA8/ooorrOQKKKKAPQKKKK5DrCiiigD0iiiiuI7QooooA+d6KKK9g8cKKKKACiiigAooooAKKKKACiiigDqKKKK+1PigooooA5eiiivij7UKKKKACiiigAooooA+iKKKK8c9gKKKKACiiigAooooA+d6KKK9g8cKKKKAPoiiiivHPYCiiigAooooAKKKKAPneiiivYPHCiiigD0CiiiuQ6wooooA8/ooorrOQKKKKAPQKKKK5DrCiiigDz+iiius5AooooAKKKKACiiigD6Iooorxz2AooooAKKKKACiiigDzeiiiu04gooooAKKKKACiiigD55ooor2DygooooA9GoooriOoKKKKAPQKKKK5DrCiiigD55ooor2DygooooA+hqKKK8c9UKKKKAPP6KKK6zkCiiigAooooAKKKKAPcKKKK+1PigooooA4+iiivz8/QAooooAKKKKACiiigDz+iiius5AooooAKKKKACiiigD6Iooorxz2AooooAKKKKACiiigDzeiiiu04gooooAKKKKACiiigD55ooor2DygooooA9GoooriOoKKKKAPQKKKK5DrCiiigD55ooor2DygooooA+hqKKK8c9UKKKKAPP6KKK6zkCiiigAooooAKKKKAPcKKKK+1PigooooA4+iiivz8/QAooooAKKKKACiiigAooooAKKKKAPP6KKK6zkCiiigAooooAKKKKAPQKKKK5DrCiiigDz+iiius5AooooA9AooorkOsKKKKAPnmiiivYPKCiiigAooooAKKKKAPRqKKK4jqCiiigD0CiiiuQ6wooooA8/ooorrOQKKKKACiiigAooooA9AooorkOsKKKKACiiigAooooA+eaKKK9g8oKKKKAPRqKKK4jqCiiigD0CiiiuQ6wooooA8/ooorrOQKKKKACiiigAooooA9AooorkOsKKKKAPP6KKK6zkCiiigD0CiiiuQ6wooooA+eaKKK9g8oKKKKACiiigAooooA9GoooriOoKKKKAPQKKKK5DrCiiigDz+iiius5AooooAKKKKACiiigD0CiiiuQ6wooooAKKKKACiiigD55ooor2DygooooA9GoooriOoKKKKACiiigAooooA9AooorkOsKKKKAPnmiiivYPKCiiigD0aiiiuI6gooooAKKKKACiiigDzmiiiu05QooooAKKKKACiiigD0aiiiuI6gooooAKKKKACiiigD0CiiiuQ6wooooA8/ooorrOQKKKKAPOaKKK7TlCiiigD7Oooor5o+iCiiigAooooAKKKKAPneiiivYPHCiiigD0CiiiuQ6wooooA8/ooorrOQKKKKAPQKKKK5DrCiiigD55ooor2DygooooA9GoooriOoKKKKACiiigAooooA85ooortOUKKKKACiiigAooooA9GoooriOoKKKKACiiigAooooA9AooorkOsKKKKAPP6KKK6zkCiiigDzmiiiu05QooooA+zqKKK+aPogooooAKKKKACiiigD53ooor2DxwooooA9AooorkOsKKKKAPP6KKK6zkCiiigD0CiiiuQ6wooooA8/ooorrOQKKKKAPoiiiivHPYCiiigD53ooor2DxwooooA9AooorkOsKKKKAPSKKKK4jtCiiigDzeiiiu04gooooA+eaKKK9g8oKKKKAPs6iiivmj6IKKKKACiiigAooooA+MaKKK+lPnQooooA+hqKKK8c9UKKKKACiiigAooooA7Ciiiv0A/PwooooA8Pooor4o+1CiiigAooooAKKKKAPQKKKK5DrCiiigDz+iiius5AooooA+iKKKK8c9gKKKKAPneiiivYPHCiiigD0CiiiuQ6wooooA9IoooriO0KKKKAPN6KKK7TiCiiigD55ooor2DygooooA+zqKKK+aPogooooAKKKKACiiigD4xooor6U+dCiiigD6Gooorxz1QooooAKKKKACiiigDsKKKK/QD8/CiiigDw+iiivij7UKKKKAPQKKKK5DrCiiigDz+iiius5AooooAKKKKACiiigD0CiiiuQ6wooooA8/ooorrOQKKKKAPQKKKK5DrCiiigDz+iiius5AooooA9AooorkOsKKKKAMeiiiv0A/PwooooA2KKKK/Pz9ACiiigD55ooor2DygooooAKKKKACiiigD6Gooorxz1QooooAKKKKACiiigDz+iiius5AooooA85ooortOUKKKKAPoaiiivHPVCiiigDz+iiius5AooooAKKKKACiiigD0CiiiuQ6wooooA8/ooorrOQKKKKAPQKKKK5DrCiiigDz+iiius5AooooA9AooorkOsKKKKAMeiiiv0A/PwooooA2KKKK/Pz9ACiiigD55ooor2DygooooAKKKKACiiigD6Gooorxz1QooooAKKKKACiiigDz+iiius5AooooA85ooortOUKKKKACiiigAooooAKKKKACiiigD0aiiiuI6gooooA9AooorkOsKKKKAPP6KKK6zkCiiigAooooAKKKKAPoiiiivHPYCiiigD53ooor2DxwooooAKKKKACiiigAooooAKKKKACiiigAooooA9AooorkOsKKKKAPP6KKK6zkCiiigAooooAKKKKAPoiiiivHPYCiiigAooooAKKKKAPjGiiivpT50KKKKACiiigAooooA9GoooriOoKKKKAPQKKKK5DrCiiigDz+iiius5AooooAKKKKACiiigD6Iooorxz2AooooA+d6KKK9g8cKKKKACiiigAooooAKKKKACiiigAooooAKKKKAPQKKKK5DrCiiigDz+iiius5AooooAKKKKACiiigD6Iooorxz2AooooAKKKKACiiigD53ooor2DxwooooA9AooorkOsKKKKAPP6KKK6zkCiiigAooooAKKKKAHUUUV2nKFFFFADaKKK4jqCiiigD0CiiiuQ6wooooAKKKKACiiigDz+iiius5AooooA85ooortOUKKKKACiiigAooooAKKKKACiiigD0aiiiuI6gooooA+iKKKK8c9gKKKKAPN6KKK7TiCiiigAooooAKKKKAPP6KKK6zkCiiigD0CiiiuQ6wooooA8/ooorrOQKKKKACiiigAooooAdRRRXacoUUUUANoooriOoKKKKAPQKKKK5DrCiiigAooooAKKKKAPP6KKK6zkCiiigDzmiiiu05QooooAKKKKACiiigAooooAKKKKAPRqKKK4jqCiiigD6Iooorxz2AooooA83ooortOIKKKKACiiigAooooAKKKKACiiigDz+iiius5AooooAKKKKACiiigD6Iooorxz2AooooA+d6KKK9g8cKKKKAPOaKKK7TlCiiigD0aiiiuI6gooooA85ooortOUKKKKAPs6iiivmj6IKKKKAPneiiivYPHCiiigAooooAKKKKAPQKKKK5DrCiiigDz+iiius5AooooAKKKKACiiigD0CiiiuQ6wooooAKKKKACiiigAooooAKKKKAPP6KKK6zkCiiigAooooAKKKKAPoiiiivHPYCiiigD53ooor2DxwooooA85ooortOUKKKKAPRqKKK4jqCiiigDzmiiiu05QooooA+zqKKK+aPogooooA+d6KKK9g8cKKKKACiiigAooooA9AooorkOsKKKKAPP6KKK6zkCiiigAooooAKKKKAPQKKKK5DrCiiigAooooAKKKKACiiigAooooA8/ooorrOQKKKKAPoiiiivHPYCiiigDzeiiiu04gooooAKKKKACiiigDz+iiius5AooooA9wooor7U+KCiiigDw+iiivij7UKKKKAPQKKKK5DrCiiigAooooAKKKKAPP6KKK6zkCiiigAooooAKKKKAPcKKKK+1PigooooA4+iiivz8/QAooooA8/ooorrOQKKKKAPOaKKK7TlCiiigD6Gooorxz1QooooA8/ooorrOQKKKKAPoiiiivHPYCiiigDzeiiiu04gooooAKKKKACiiigDz+iiius5AooooA9wooor7U+KCiiigDw+iiivij7UKKKKAPQKKKK5DrCiiigAooooAKKKKAPP6KKK6zkCiiigAooooAKKKKAPcKKKK+1PigooooA4+iiivz8/QAooooA8/ooorrOQKKKKAPOaKKK7TlCiiigD//2Q==";
var backgroundDarkDirtImageDecoded = new android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(backgroundDarkDirtImage, 0), 0, android.util.Base64.decode(backgroundDarkDirtImage, 0).length);
var scaledBackgroundDarkDirtImageDecoded = new android.graphics.Bitmap.createBitmap(backgroundDarkDirtImageDecoded);

//Banner MCPE Main
var pmmm = "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"

//Logo 10K+ Coding
var cmdd = "iVBORw0KGgoAAAANSUhEUgAAAUAAAABACAYAAABr564eAAAEj0lEQVR4nO3dvWsUQRjH8edEbYJISkESPGvFIq34V6SzERvbYGWjaGMlaW3EJl3+Cg2kSiFae0IIKDYKkiK+EIvLYG6y487szjP78nw/VXI7szuZPfZ+eWaPnchZxxWvAcCQTapePFd6FADQF6evisciIuvr6x0NBQB0bG9vux8XkiAJEIBZEyH5ATDCT4IkQABm1SbAvb29kuMBgGzW1tYqX3dJkAQIwKzzoQ0kPwBD565joSRIAgRgFhdAAGZxAQRgFhdAAGZxAQRgVnAVeOxms0+Vr0+n17LsN3Y/qe0x13beQuffZ+W8+PNp5X1JAgRglrkEWPfJVvqTb+yfsH3H/NtGAgRgVi8S4IWfnytf/3XxSuGRhDWtGfr9/PahxBl7vKaJNnX//vbY46buP7V97lpg6vkM9QvV1Orah7Sd51B76wmYBAjArE4SoJ/47ty6XNnuzbt5O40kGLsK2DZh5UpssdvrNN1/KPmlrh7W7b+ufe5VytT+2u+D2P2nznPqfwJWkAABmFUkAdYlvg8fD0VE5Mb1pcp2GkkwtaaSup9c9xNqGfr+u9KX94fTdp5DNUorSIAAzFJJgLE1Pp9Lgo5LhJpJsC2t+wZj99e0Ftd0vKnjGoumq97atOZ5bOcvhAQIwKwsCTA28YVqfe53PwH67btIgnU1Eq3kl3pfWGrya3rfWR3t/YeOo/Wd4NDqc9dS5zl1/HwXGABGLvhUuJRngrgEePMkqS1f+n+wDCXBWK7/7MuRiIgsLV9ttB8ANvjPBOGpcADMU1kF/vbjt4iEk2Bq8vNrg08251fvra0tERHZ3d1NHSIAkAAB2KWSAO8/miezV8/vikh9TdDnJ757Gy9ERGRlZUVERPb399sOEQBIgADsypIAvx/+Wfh9dXVVROKTYKjG55Ken/xebz4UEVaBAbRDAgRgVpYE6BLY2/cHIiLy+MFtERF59nJHRM4mwYOvRwv9/cTnJ7+nG4v3KLrkl8NsNhMRkel0GtXOV9evaX/t9rnFzmPT9rmUPm7T8+L3azrert4Xbee51HkiAQIwK+sqcGwS9KUmvhw1v9AnY6hdXfLKtV27fep2LaWPV1rTec91Pvp63vuGBAjALJX7AOuS4M7OzkJ7t6rraCQ+n5+gUjXt17S/dvvSQkk2pG3tMzYRpR4/F//4uWqAIVq1Z+1aem4kQABmqT4TJJQE/VXgEokvl9Tk0rZ/7vah/tqJI5ZW7bPvtbDYv0tLrtpz3furb+eBBAjArCJPhfOTYGh7n5W+r0mrvdaqY1fa1jrrkvVQ56UrdfPZt9o0CRCAWUUSoDOEpBfSNomlJgnt9mOR6+/uW21KW9/v/yw1LhIgALOKJsA+SF0FbVsjSu2v3T51e6pS99O1vX/Q0Rpv17XFrt93qeMJteO7wACgJMtT4fDPWGtGwJDxVDgA8JirAWoj+QHDQQIEYBYXQABmcQEEYFawBuhWTVgNBjBU/uqvjwQIwKzJqZ8r7wcEgLHhPkAA5k0qXiMJAhgll/zk5NpHAgRgVlUCdI6LjQIAyli45pEAAZj1F1820Mn435Q8AAAAAElFTkSuQmCC"

//Featured
var cmdd3 = "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"

//Android Logo
var cmdd2 = "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"

//Remake Edt
var cmdr1 = "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"

//20K downloads
var cmdd4 = "iVBORw0KGgoAAAANSUhEUgAAAUAAAABACAYAAABr564eAAAEkElEQVR4nO3dv8sURxzH8c+GxyKgiGIkWIgegmBjhKewSmmTRoUHBH/g/5DKP0IrKxvRWAgPJKlSpLC2eCCJgpWchSCiooiKRYq10FFvvbnZ2Z2Z273v+1U9z93M7Nzesvu57+7eVXVd62tVVc0+AAAjV9d1Ne/x70pPBACGYs394ZLfxsbG8mYDABm4/VszCZIAAZhVSSL5ATBhc3NT0pckSAIEYNZaqMHW1laJeQBAcuvr6zP/u0+6riZIAgRgljcBkvwAjJ3bjzWToEMCBGAWO0AAZrEDBGAWO0AAZrEDBGBW8DrAVTWdPpr7+GRyMMm4bceJbY+P+q433/vfZOV9aa5PK9slCRCAWeYSYOjIVvrIt+pH2KFj/dtGAgRglrkE2FXXmmGzX7O9L3G2XV7XRBs7fvP5tsuNHT+2fepaYOz76evnq6mF2vv0Xc++9tYTMAkQgFlLS4DP9+5c+PwPz15nXX7bs4B9E1aqxNb2+ZCu4/uSX+zZw9D4ofapz1LG9s+9HbQdP3Y9x34SsIIECMCs4gnQJb83d/9Z2G7H8WOS8iXB2JpK7DiprifMZezjL8tQtg+n73r21SitIAECMKtYAmwmv9/eP53b7ujadknSoVuXJUkPz/0qKX9NsKtc1w22Ha9rLa7rfGPntSq6nvXOLdd6XrX3z4cECMCs7Amwmfzu/f92brvz3/8oSfrl5T1J0r7deyRJD3NPMCBUI8mV/GKvC4tNfl2vOwvJPb5vObnuCfadfV622PUcO3/uBQaAFef9XeBUvwniq/25xOdLhJfeTCVJT16+kDT8WiCA4Wr+Joj7fWASIACzstUAQ8nv8rvHC/s/uP2nJOnImZOSll8LBLB6SIAAzCp+J4iv5hcylusCAYwHCRCAWcUSoLvD4+z9O5Kki4ePter335Vr2eYEwDYSIACziiVAd13f/gMHJElXb1xf2H778Z9m/n9799+k85lOp3Mfn0wmSdqXXl7f+fXlW37peXTl5j+0efad11Bf11CQAAGYlS0BurO07nv9fv7rhqQvNb1dp08s7P/q979n2r24+cfMuF2FjojN52Pbl15e7vnFKrUcIAUSIACzitUA3T29sVLX/lIlkFDNK3X/3O2XpW3tsmsy9ondDkrXcEPzG3vNdShIgADMyp4AXc3O3cGx58KpVv227dsrKV3tz6frkbdt0ujbP3V7X//Y9dBXqdpk3/G7zrNvDTf0PpHw0iABAjCrWA3QJbjnnxKdS3Zt+6UWeyQtfT1WrvaxtbWhGvq8+9ZgfQk+9ElgqOtjqEiAAMwq/m0wy/4Wl9Q1ndT9S7VHHm23r77abr9sF4uRAAGYVTwBDkXbI3Hfmkts/9ztY5+PVfp1pk5UvgSV6nWFlhsSe/3f0Guly0YCBGBW9l+Fs4YjLjA8/CocADSYrQHmQvIDxoMECMAsdoAAzGIHCMAsbw3QnTXhbDCAsWqe/W0iAQIwa62u60qSqqqaez1gaA8KAGNFAgRgVlXX9ewDniQIAGPn7gBxn3xJgADM+iYBfn7iUxIEgFXhkp9DAgRg1gfi6KgjHBm81gAAAABJRU5ErkJggg"

//menu button
var cmdd0 = "iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAYAAAA8AXHiAAAABHNCSVQICAgIfAhkiAAAA39JREFUeJzt3bFrXmUYxuETo1hsxUVIQSzFwUEEFScntw4iXSo4SBcX/6I6uikOLZ10cRB16GJQaI0Qai3q1xqlrVprmkoSdwe9S77b9zO5rvnhnEPy6zs8OZxOEwAA8L+wNPoB/nOnpt0h9z13sH7WD4x+APYnYVEhLCqERYWwqBAWFcKiQlhUCIuK/bMNDjfq62d/ji53eZrt6XH+7pXXns8G98mG3olFhbCoEBYVwqJCWFQIiwphUSEsKoRFxYOjH+BfhRv1D89+GV3u/c1Po7kz1z+I5mKvPxsOXsreyV/wDb0TiwphUSEsKoRFhbCoEBYVwqJCWFQIi4pxm/c5b9Q/3/wmmnth+Xg0l9q48kM2uLqRzb36TDZ3bS3b0F8Ys6F3YlEhLCqERYWwqBAWFcKiQlhUCIsKYVEx/837nL/6kr6jnm7U3735STQXu/NbNnfs8fne9+ST4eD3Qzb0TiwqhEWFsKgQFhXCokJYVAiLCmFRISwqhr3znn5H/ePtr6O52e4v0dybR09Ec2/cezmaO7+yGs29c/7taG76MxubjhwOB8dwYlEhLCqERYWwqBAWFcKiQlhUCIsKYVExbPO+tbM91+ut71yf6/W+2L4azX27+1N2wUcPZXN/hKv3HzezuUGcWFQIiwphUSEsKoRFhbCoEBYVwqJCWFQs/v+wOmdb97ZGP8I/uxv+ReLww93n2CMnFhXCokJYVAiLCmFRISwqhEWFsKgQFhXDNu+f3f4qG1ye733Td9nTr9ysLD22h6fZgzuL/RcEJxYVwqJCWFQIiwphUSEsKoRFhbCoEBYVC//O+5WN76K5p1aORXNXd25Ec+lG/ZEpfPd89ms2d+1WNnfkoWxuECcWFcKiQlhUCIsKYVEhLCqERYWwqBAWFUvD7nxq2o3mTr8YjT3x9HPR3Gx9LZqLv/py4/dsLt2oL4e/ko/C79pfGPM7dmJRISwqhEWFsKgQFhXCokJYVAiLCmFRMe6d93PpRng12tDPTof3vRv+WzoUfubmgG3UU04sKoRFhbCoEBYVwqJCWFQIiwphUSEsKhZ6e3tfXgrfoX8re4c+djv8isx7l7O5Bd+op5xYVAiLCmFRISwqhEWFsKgQFhXCokJYVOyLLe99STf0qfBjM9PFg/WzdmJRISwqhEWFsKgQFhXCokJYVAiLCmEBAAAcZH8BsYiGtIbZtyUAAAAASUVORK5CYII="

//WizardHax
var cmdd02 = "iVBORw0KGgoAAAANSUhEUgAAAUAAAABACAYAAABr564eAAAD30lEQVR4nO3dwZWbMBDGccjzeXuIa3AJue3ZLaSotODz3lKCayA9bAPKIVESaz2RZiSBYP6/064thAw8+DyC5zmEMP1rnufHFwBg50II87PXP609EAAYxSn+EZPf9XrdbjQA0EE8v6VJkAQIwK15miaSHwAXbrfbNE1/kyAJEIBbp1yD+/2+xjgAoLnL5fLwf/ymG2uCJEAAbokJkOQHYO/ieSxNghEJEIBbnAABuMUJEIBbnAABuMUJEIBb2fsAj2pZfjx9/Xz+3KTf0n607fFL7XaT9n/Ky35Jt6eX45IECMCt5glweX8vand+eWmynFbuyrb2le/oV9jRsf19IwECcMttDVDLWjNMl0vbS4mzdH3WRKvtP32/dL3a/rXtW9cCtftTWk6qqeXaS2q3s9TeewImAQJwqzoBfqjdvb09b/j6+v/ljOuz1gRLZwFrE1arxFb6fo61fyn5aWcPc/3n2reepdQu3/s4KO1fu5213wS8IAECcMttDVBbU9H20+p+wl723v9WRjk+otrtLNUovSABAnDLbQJspdd9g6X9WWtx1vFqx3UU1lnv3npt56PtPwkJEIBb7RNgMtu7d7kaSa/kp70vTJv8rPed5fTuX1pPr2eCpdnnrWm3s3b8PAsMAAcn/i5w6W+CWO/na6X22WAAx5f+Jkj8fWASIAC3qmuA35P/v9R2qFwfAFiRAAG4xQkQgFucAAG4VV0D/JrMwn4TZoW1tUGp1peuDwCsSIAA3HL3LPCyLEXtzudz55E8iuNae72t1X4Oaf+stV1y40/f3/t+036etT9v7/WRAAG41TwBSjW6tDaY1gTTml/vWt9er9hHNVryKDXaeKBDAgTglrsaYJTWmnJXcm1tqrR92q62JiP932q8UvutaqaSrWpU1hqz9nip3b/W413bPjd+qZ+19h8JEIBbbhNg6RXGesUqbd9rNlHqr3XCTNutbZQkEVnHo12udv9aE7T1m0LueN9qf5EAAbi1WgLMPTEy+hMerWoia7Emjdr1bf25W2t1X2Prmpt2/0rtWu0v6/i3nt0nAQJwy20NUKt1zXA03M/2yDq7Ky1vbTfq8RJZx19aA+x9XJIAAbi1WQIcveYXlSYAaZbLup7a/qzrzbXrNZ5cv1vP5pZ+bum+Tqn/UfbvWv3nkt7as8MkQABuVf8qHACMjl+FA4AEJ0AAbnECBOAWJ0AAbnECBOCWeB9gnDVhNhjAXqWzvykSIAC3TiGEeZqmaZ7np/cD5s6gALBXJEAAbs0hhMcXhCQIAHsXnwCJ33xJgADc+pAA/7zxOwkCwFHE5BeRAAG49ROFYWzh6nbdywAAAABJRU5ErkJggg"

//MCPEDL
var cmdd03 = "iVBORw0KGgoAAAANSUhEUgAAAUAAAABACAYAAABr564eAAAFCklEQVR4nO3dTYgcRRjG8e5lIThByCF+bDaIDhEPIsKyQRLYg0JAorhIWMghFy8GLzF48hAUTFaTSyTRgwgejArqiMF4cgUNRDSHBXVRPLiOMcb4gYcoBJYEbQ9amreyZVV1dffM9Pv/nfad6amu6Rmqn6nu3s6LosiulOe5fAAARlxRFPlqj4813REAGBbj5g+T/Obm5gbXGwCogRnf7CRIAgSgVp5lGckPgAq9Xi/Lsv+SIAkQgFrjvgUWFxeb6AcAVG56elrU5peumRMkAQJQy5kASX4ARp0Zx+wkaJAAAajFAAhALQZAAGoxAAJQiwEQgFre8wDbqt//dtXHu91bKmk3tJ3Y5fG31O3m+vxtWj4Xe3tq+V6SAAGolZwAD7z1hKj3LO8V9ZbOlKgfXL9L1JvXbhb1u51jol65cEnUn320LOovjnwV3tnMv2dres/X9j3ssGP760YCBKCW2jnAWGXnDO3X2cu7Emfo+som2tj27edD1xvbfuzyVc8Fxn6erte55tR8y7ukbmfX8toTMAkQgFrpc4AfPyPq+6e2i/rs79+I+vOx06I+/mFP1Jvuu07UFy+siHr+noOinj0yG97ZK4QeBUxNWFUlttDnfcq270p+sUcPfe37lq/6KGXs6+v+HoS2H7udY38JaEECBKCW2jnA2DmV2HaqOp+wLqPe/qAMy/fDSN3OrjlKLUiAANRKToA3Ta0T9clnPxD1xPgGUd/65G2i/nnNb6J++7H3Rb2hMyHqzoFOqX7Wpa7zBkPbKzsXV7a/sf1qi7JHvetW13Zu2+fnQgIEoJbaOcBQvjmSupJf7Hlhscmv7HlnPnW371pPXdcEu44+D1rsdo7tP9cCA0DLOe8LHHpPkNvf3Cjqpf1fi/rsiZ9EvftTuZ4z358T9XsPfCLqG7auF/VDz+8Q9Rs7FoL6CUAv+54g5v7AJEAAajEAAlCLARCAWslHgWfWbBP1xCPyvL87D90l6oOPPy3q/A85Bp9aOinq+YV5UZ8f+6FMNwHgKiRAAGoxAAJQiwEQgFrJc4CT2Y2iPn1Gnj/46suviPrcO7/+b3u7rtkp6nufmhH1zssPi/pUJmuffr8ftFy3241qN5XpV9PrrVrq+3B9Pk1tF1//Xc+H9tv3/Ytd3n5d2fZDt29bvqcGCRCAWmqvBW7LHqwtyiavpvrjSlZl+13V8i7Dsh2HHQkQgFrp/w9wnfxvEdd35Jzg8ddPRLX3XU9eO7yy+7Kojy4fjWrPxd6j+/aIsXNTZeeEXMkjdI/uSy6p/XUtP6g5U5fU/oRuz9B2bKO2vduKBAhALeYAPeqe4wlNerF8RyurSpj2ck2re66rrqRV1Zwe0pAAAaiVnABfu/iiqCdnJkVt/z+/fS/slcv/uUnUj+7bI+rlpR9FfcfdN5foZbrYhDOoRGS4EkPsnFTs+gb9voEYJEAAaqmdA4xV9ZzhsGGOqR5tO++uLe/DIAECUCs5AS5st+8dIutOdq2oD8++5OnQWlGf//IXWT8n67rFXmOZer6Y7yhx1Zp6f6n9GNbk0VS/q7qGuOwvk7rOVhg0EiAAtZLvCgcAw467wgGAhQEQgFoMgADUYgAEoBYDIAC1nOcBmqMmHA0GMKrso782EiAAtcaLosizLMvyPF/1fEDfCAoAo4oECECtvCgK+YAjCQLAqDNXgJhfviRAAGpdlQD/feKfJAgAbWGSn0ECBKDWX87WYf2afgo0AAAAAElFTkSuQmCC"
/////////////////////////////////////////////////

//Close menu: Backmenu.dismiss();

//Close menu:     BackMenu()

/////////////////////////////////////////////////
function BackMenu(){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var BackmenuLayout = new android.widget.LinearLayout(ctx);
            var BackmenuScroll = new android.widget.ScrollView(ctx);
            var BackmenuLayout1 = new android.widget.LinearLayout(ctx);
            BackmenuLayout.setOrientation(1);
            BackmenuLayout1.setOrientation(1);

            BackmenuScroll.addView(BackmenuLayout);
            BackmenuLayout1.addView(BackmenuScroll);

	                  Backmenu = new android.widget.PopupWindow(BackmenuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/2, ctx.getWindowManager().getDefaultDisplay().getHeight());

Backmenu.setBackgroundDrawable(GUIColor); 
Backmenu.setTouchable(false); Backmenu.showAtLocation(ctx.getWindow().getDecorView(), GUIPos | Gravity.TOP, 0, 0);
        }catch(error){
            print("Nha v"+VER+" FOUND " + error);
        }
    }}));
}

ModPE.downloadFile=function(filename,url)
{
	var file=new java.io.File(android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/games/com.mojang/ModScript/DamageIndicators/"+filename);
	file.createNewFile();
	var fos=new java.io.FileOutputStream(file);
	var response=android.net.http.AndroidHttpClient.newInstance("ModPE.downloadFile()").execute(new org.apache.http.client.methods.HttpGet(url)).getEntity().writeTo(fos);
	fos.close();
	};
var webWindow=null;
function ShowGUI(){
	activity.runOnUiThread(new java.lang.Runnable({
		run: function(){
			webWindow=new android.widget.PopupWindow();
			var webView=new android.webkit.WebView(activity);
			webView.getSettings().setJavaScriptEnabled(true);
			webView.getSettings().setUserAgentString("Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.0.4) Gecko/20100101 Firefox/4.0");
			webView.loadUrl("https://www.google.com");
			webWindow.setContentView(webView);
			webWindow.setWidth(0);
			webWindow.setHeight(0);
			webWindow.showAtLocation(activity.getWindow().getDecorView(),android.view.Gravity.TOP | android.view.Gravity.LEFT,-100,-100);
			}
		}));
	}
function HideGUI()
{
	activity.runOnUiThread(new java.lang.Runnable(
  { 
		run: function()
    {
			if(webWindow!=null) 
      { 
				webWindow.dismiss();
				webWindow=null;
			 }
		 }
  }));
}

var path=android.os.Environment.getExternalStorageDirectory().getAbsolutePath()+"/games/com.mojang/ModScript/DamageIndicators";
if(!java.io.File(path+"silverfish.png").exists())
{
	try
   {
		java.io.File(path).mkdirs();
		ModPE.downloadFile("main.png","http://i.imgur.com/2SBtghA.png");
		ModPE.downloadFile("villager.png","http://i.imgur.com/xmQ4PR5.png");
		ModPE.downloadFile("chicken.png","http://i.imgur.com/lpoFO5a.png");
		ModPE.downloadFile("cow.png","http://i.imgur.com/XYd5BXt.png");
		ModPE.downloadFile("pig.png","http://i.imgur.com/Yddib14.png");
   ModPE.downloadFile("sheep.png","http://i.imgur.com/FoGoUdZ.png");
   ModPE.downloadFile("mooshroom.png","http://i.imgur.com/bc6S34E.png");
ModPE.downloadFile("squid.png","http://i.imgur.com/ASZYcxK.jpg");
ModPE.downloadFile("zombie.png","http://i.imgur.com/voIdIdX.png");
ModPE.downloadFile("creeper.png","http://i.imgur.com/S1cqFE7.png");
ModPE.downloadFile("skeleton.png","http://i.imgur.com/c5Sey0o.png");
ModPE.downloadFile("spider.png","http://i.imgur.com/7xq8LDu.png");
ModPE.downloadFile("zombiepigman.png","http://i.imgur.com/Bzq4O6B.png");
ModPE.downloadFile("slime.png","http://i.imgur.com/5Tg090D.png");
ModPE.downloadFile("enderman.png","http://i.imgur.com/8NMU39Q.png");
ModPE.downloadFile("silverfish.png","http://i.imgur.com/8Z5FlpO.png");
ModPE.downloadFile("ocelot.png","http://hydra-media.cursecdn.com/minecraft.gamepedia.com/0/0d/Ocelot.png");
ModPE.downloadFile("rabbit.png","http://hydra-media.cursecdn.com/minecraft.gamepedia.com/thumb/5/5b/Black_%26_White_Rabbit.png/640px-Black_%26_White_Rabbit.png");
ModPE.downloadFile("bat.png","http://hydra-media.cursecdn.com/minecraft.gamepedia.com/thumb/a/ad/Bat.png/225px-Bat.png");
ModPE.downloadFile("cavespider.png","http://hydra-media.cursecdn.com/minecraft.gamepedia.com/thumb/9/9f/Blue_Spider_2.png/225px-Blue_Spider_2.png");
ModPE.downloadFile("ghast.png","http://hydra-media.cursecdn.com/minecraft.gamepedia.com/thumb/8/89/Ghast.png/225px-Ghast.png");
ModPE.downloadFile("magmacube.png","http://hydra-media.cursecdn.com/minecraft.gamepedia.com/e/ed/Magma_Cube.png");
ModPE.downloadFile("blaze.png","http://hydra-media.cursecdn.com/minecraft.gamepedia.com/thumb/b/bd/Blaze.png/225px-Blaze.png");


		}
	catch(err)
   {
		print(err);
		}
}

//MiniMap mod
//Copyright 2015 MxGoldo
var curVersion = 3.2,	
	X,
	Z,
	YAW,
	DIMENSION,
	redraw = false,
	startMapControl = true,
	settings = {},
	settingsLoaded = false,
	map_state = false,
	entities = [],
	chests = [],
	minZoom,
	absZoom,
	bmpSrc,
	bmpSrcCopy,
	bmpBorder,
	pathBorder,
	canvasBmpSrc = new android.graphics.Canvas(),
	canvasBmpSrcCopy = new android.graphics.Canvas(),
	matrixMap = new android.graphics.Matrix(),
	matrixPointer = new android.graphics.Matrix(),
	bmpSrcLock = new java.util.concurrent.Semaphore (1, true),
	delayChunksArrLock = new java.util.concurrent.Semaphore (1, true),
	delayChunksArr = [],
	pool,
	poolTick,
	scheduledFutureUpdateMap,
	runnableUpdateMap,
	context = com.mojang.minecraftpe.MainActivity.currentMainActivity.get(),
	mapWindow,
	setWindow,
	density = context.getResources().getDisplayMetrics().density,
	displayHeight = (context.getResources().getDisplayMetrics().widthPixels < context.getResources().getDisplayMetrics().heightPixels) ? context.getResources().getDisplayMetrics().widthPixels : context.getResources().getDisplayMetrics().heightPixels;
var log = {
		str: "MiniMap_Mod_MxGoldo v" + curVersion +
			 "\nMCPE v" + ModPE.getMinecraftVersion() +
			 "\nAndroid API Level " + android.os.Build.VERSION.SDK_INT +
			 "\n" + context.getPackageName() + " v" + context.getPackageManager().getPackageInfo(context.getPackageName(), 0).versionName +
			 "\n-----",
		lock: new java.util.concurrent.Semaphore (1, true),
		path: android.os.Environment.getExternalStorageDirectory().getPath() + "/",
		e: function (msg, e) {log.write("Error: " + msg + ", " + e + " (" + e.fileName + " #" + e.lineNumber + ")"); },
		write: function (msg) {
			if (settings.debug_mode) {
				this.lock.acquire();
				try {
					this.str += "\n" + msg;
					save(this.path, "log_minimap.txt", this.str);
					print("log: " + msg);
				} finally {
					this.lock.release();
				}
			}
		}
	};
(function () {
	var i, settingsString, d = Math.floor(new Date().getTime() / 1000);
	settingsString = load(android.os.Environment.getExternalStorageDirectory().getPath() + "/games/com.mojang/minecraftpe/mods/", "minimap.txt").split("\n");
	for (i = 0; i < settingsString.length; i += 1) {settings[settingsString[i].split(":")[0]] = parseFloat(settingsString[i].split(":")[1]); }
	if (settings.version !== curVersion) {
		settings = {radius: 4,
					map_type: 1,
					map_zoom: 80,
					map_alpha: 70,
					show_passive: 1,
					show_hostile: 1,
					show_player: 1,
					show_otherPlayer: 1,
					show_chest: 1,
					hide_underground_mob: 0,
					button_size: 40,
					window_rawSize: 35,
					window_size: displayHeight * 0.35,
					window_rawPosition: 0,
					window_gravity: 51,
					window_y: 0,
					style_border: 2,
					style_pointer: 3,
					style_shape: 0,
					show_info: 1,
					show_zoomBtn: 1,
					delay: 20,
					threadCount: 4,
					debug_mode: 0,
					updateCheck: 1,
					updateCheckTime: 0,
					updateVersion: curVersion,
					version: curVersion}
	}
	new java.lang.Thread(function () {
		android.os.Process.setThreadPriority(android.os.Process.THREAD_PRIORITY_BACKGROUND);
		var newVersion;
		if (Math.floor(settings.updateCheckTime / 86400) < Math.floor(d / 86400) && settings.updateCheck) {
			newVersion = parseFloat(loadTxtFromUrl("https://raw.githubusercontent.com/MxGoldo/MCPE-mod-scripts/master/MiniMap_Mod_version"));
			log.write("newVersion = " + newVersion);
			if (!isNaN(newVersion)) {settings.updateCheckTime = d; }
			if (newVersion > curVersion) {settings.updateVersion = newVersion; }
			saveSettings();
		}
		if (settings.updateVersion > curVersion && settings.updateCheck) {
			context.runOnUiThread(function() {
				settingsUI(["MiniMap Mod", "Close",
						   ["keyValue", "text", "New version available !<br/>Your version: " + curVersion.toFixed(1) + "<br/>Latest version: " + settings.updateVersion.toFixed(1) +
						   "<br/><br/>Download from <a href=http://www.minecraftforum.net/forums/minecraft-pocket-edition/mcpe-mods-tools/2336349>minecraftforum.net</a>", ""],
						   ["checkBox", "updateCheck", "Check for updates"]]).show();
			});
		}
	}).start();
	bmpBorder = drawBorderBmp();
	pathBorder = createPath(false, true);
	bmpSrc = android.graphics.Bitmap.createBitmap(((settings.radius + 1) * 2 + 1) * 16, ((settings.radius + 1) * 2 + 1) * 16, android.graphics.Bitmap.Config.ARGB_8888);
	bmpSrcCopy = android.graphics.Bitmap.createBitmap(bmpSrc.getWidth(), bmpSrc.getHeight(), android.graphics.Bitmap.Config.ARGB_8888);
	canvasBmpSrc.setBitmap(bmpSrc);
	canvasBmpSrcCopy.setBitmap(bmpSrcCopy);
	minZoom = settings.window_size / (settings.radius * 2 * 16);
	absZoom = (100 / settings.map_zoom) * minZoom;
	poolTick = java.util.concurrent.Executors.newSingleThreadScheduledExecutor();
	log.write("created new SingleThreadScheduledExecutor");
	runnableUpdateMap = new java.lang.Runnable(function () {
		try {
			android.os.Process.setThreadPriority(android.os.Process.THREAD_PRIORITY_BACKGROUND);
			var xNew = Player.getX(),
				zNew = Player.getZ(),
				yawNew = getYaw(),
				xChunkNew,
				zChunkNew,
				xChunkOld,
				zChunkOld,
				dimensionNew = Player.getDimension(),
				i,
				ix,
				radius = settings.radius * 16;
			if (xNew !== X || zNew !== Z || yawNew !== YAW || redraw || dimensionNew !== DIMENSION) {
				redraw = false;
				xChunkNew = Math.floor(xNew / 16) * 16;
				zChunkNew = Math.floor(zNew / 16) * 16;
				xChunkOld = Math.floor(X / 16) * 16;
				zChunkOld = Math.floor(Z / 16) * 16;
				if (xChunkNew !== xChunkOld || zChunkNew !== zChunkOld || dimensionNew !== DIMENSION) {
					log.write("enter new chunk; x = " + xChunkNew + " / z = " + zChunkNew + " / xDelta = " + Math.abs(xChunkNew - xChunkOld) + " / zDelta = " + Math.abs(zChunkNew - zChunkOld) + " / dimension = " + dimensionNew);
					if (Math.abs(xChunkNew - xChunkOld) <= radius * 2 && Math.abs(zChunkNew - zChunkOld) <= radius * 2 && dimensionNew === DIMENSION) {
						log.write("redraw part");
						try {
							bmpSrcLock.acquire();
							bmpSrcCopy.eraseColor(0);
							canvasBmpSrcCopy.drawBitmap(bmpSrc, zChunkNew - zChunkOld, xChunkOld - xChunkNew, null);
							bmpSrc.eraseColor(0);
							canvasBmpSrc.drawBitmap(bmpSrcCopy, 0, 0, null);
						} finally {
							X = xNew;
							Z = zNew;
							bmpSrcLock.release();
						}
						if (xChunkNew > xChunkOld) {
							for (i = radius + 16 - (xChunkNew - xChunkOld); i <= radius; i += 16) {
								scheduleChunk(xChunkNew + i, zChunkNew, 0);
								for (ix = 16; ix <= radius; ix += 16) {
									scheduleChunk(xChunkNew + i, zChunkNew + ix, 0);
									scheduleChunk(xChunkNew + i, zChunkNew - ix, 0);
								}
							}
						} else if (xChunkOld > xChunkNew) {
							for (i = radius + 16 - (xChunkOld - xChunkNew); i <= radius; i += 16) {
								scheduleChunk(xChunkNew - i, zChunkNew, 0);
								for (ix = 16; ix <= radius; ix += 16) {
									scheduleChunk(xChunkNew - i, zChunkNew + ix, 0);
									scheduleChunk(xChunkNew - i, zChunkNew - ix, 0);
								}
							}
						}
						if (zChunkNew > zChunkOld) {
							for (i = radius + 16 - (zChunkNew - zChunkOld); i <= radius; i += 16) {
								scheduleChunk(xChunkNew, zChunkNew + i, 0);
								for (ix = 16; ix <= radius; ix += 16) {
									scheduleChunk(xChunkNew + ix, zChunkNew + i, 0);
									scheduleChunk(xChunkNew - ix, zChunkNew + i, 0);
								}
							}
						} else if (zChunkOld > zChunkNew) {
							for (i = radius + 16 - (zChunkOld - zChunkNew); i <= radius; i += 16) {
								scheduleChunk(xChunkNew, zChunkNew - i, 0);
								for (ix = 16; ix <= radius; ix += 16) {
									scheduleChunk(xChunkNew + ix, zChunkNew - i, 0);
									scheduleChunk(xChunkNew - ix, zChunkNew - i, 0);
								}
							}
						}
					} else {
						log.write("redraw all");
						X = xNew;
						Z = zNew;
						chests = [];
						bmpSrc.eraseColor(0);
						scheduleChunk(xChunkNew, zChunkNew, 0);
						for (i = 16; i <= settings.radius * 16; i += 16) {
							for (ix = 0; ix < i; ix += 16) {
								scheduleChunk(xChunkNew + ix + 16, zChunkNew + i, 0);
								scheduleChunk(xChunkNew + ix, zChunkNew - i, 0);
								scheduleChunk(xChunkNew - ix, zChunkNew + i, 0);
								scheduleChunk(xChunkNew - ix - 16, zChunkNew - i, 0);
								scheduleChunk(xChunkNew + i, zChunkNew + ix, 0);
								scheduleChunk(xChunkNew + i, zChunkNew - ix - 16, 0);
								scheduleChunk(xChunkNew - i, zChunkNew + ix + 16, 0);
								scheduleChunk(xChunkNew - i, zChunkNew - ix, 0);
							}
						}
					}
				} else {
					X = xNew;
					Z = zNew;
				}
				YAW = yawNew;
				DIMENSION = dimensionNew;
				var zoom = absZoom,
					style_pointer = settings.style_pointer,
					x0 = xNew - (settings.window_size * 0.5 / zoom),
					z0 = zNew + (settings.window_size * 0.5 / zoom);
				matrixMap.setTranslate(settings.window_size * 0.5 - (bmpSrc.getWidth() * 0.5) - 8 + zNew - zChunkNew, settings.window_size * 0.5 - (bmpSrc.getHeight() * 0.5) + 8 - xNew + xChunkNew);
				matrixMap.postScale(zoom, zoom, settings.window_size * 0.5, settings.window_size * 0.5);
				if (settings.show_info) {mapWindow.setInfo(); }
				var canvas = mapView.lockCanvas();
				canvas.drawColor(0, android.graphics.PorterDuff.Mode.CLEAR);
				canvas.save(android.graphics.Canvas.CLIP_SAVE_FLAG);
				canvas.clipPath(pathBorder, android.graphics.Region.Op.REPLACE);
				canvas.drawBitmap(bmpSrc, matrixMap, bmpPaint);
				if (settings.show_chest) {
					i = chests.length;
					while(i--) {
						matrixPointer.setTranslate((z0 - chests[i][1]) * zoom, (chests[i][0] - x0) * zoom);
						matrixPointer.preConcat(pointer[3].matrix);
						canvas.drawBitmap(pointer[3].bmp, matrixPointer, null);
					}
				}
				if (settings.show_passive || settings.show_hostile || settings.show_otherPlayer) {
					redraw = true;
					i = entities.length;
					var id;
					while(i--) {
						if (!settings.hide_underground_mob || Entity.getY(entities[i]) > 60) {
							id = Entity.getEntityTypeId(entities[i]);
							if (style_pointer !== 3) {
								if (id < 32 && settings.show_passive) {
									matrixPointer.reset();
									if (pointer[style_pointer].rotate) {matrixPointer.postRotate(Entity.getYaw(entities[i]) - 90); }
									matrixPointer.postTranslate((z0 - Entity.getZ(entities[i])) * zoom, (Entity.getX(entities[i]) - x0) * zoom);
									matrixPointer.preConcat(pointer[style_pointer].matrix);
									canvas.drawBitmap(pointer[style_pointer].bmp, matrixPointer, pointerPaint.GREEN);
								} else if (id < 63 && id >= 32 && settings.show_hostile) {
									matrixPointer.reset();
									if (pointer[style_pointer].rotate) {matrixPointer.postRotate(Entity.getYaw(entities[i]) - 90); }
									matrixPointer.postTranslate((z0 - Entity.getZ(entities[i])) * zoom, (Entity.getX(entities[i]) - x0) * zoom);
									matrixPointer.preConcat(pointer[style_pointer].matrix);
									canvas.drawBitmap(pointer[style_pointer].bmp, matrixPointer, pointerPaint.RED);
								} else if (id === 63 && settings.show_otherPlayer) {
									matrixPointer.reset();
									if (pointer[style_pointer].rotate) {matrixPointer.postRotate(Entity.getYaw(entities[i]) - 90); }
									matrixPointer.postTranslate((z0 - Entity.getZ(entities[i])) * zoom, (Entity.getX(entities[i]) - x0) * zoom);
									matrixPointer.preConcat(pointer[style_pointer].matrix);
									canvas.drawBitmap(pointer[style_pointer].bmp, matrixPointer, null);
								}
							} else if ((id < 32 && settings.show_passive) || (id < 63 && id >= 32 && settings.show_hostile) || (id === 63 && settings.show_otherPlayer)) {
								matrixPointer.reset();
								matrixPointer.postRotate(Entity.getYaw(entities[i]) - 90);
								matrixPointer.postTranslate((z0 - Entity.getZ(entities[i])) * zoom, (Entity.getX(entities[i]) - x0) * zoom);
								matrixPointer.preConcat(iconMatrix);
								canvas.drawBitmap(heads[id] || heads[0], matrixPointer, null);
							}
						}
					}
				}
				if (settings.show_player && !settings.show_otherPlayer) {
					if (style_pointer !== 3) {
						matrixPointer.reset();
						if (pointer[style_pointer].rotate) {matrixPointer.postRotate(yawNew - 90); }
						matrixPointer.postTranslate(settings.window_size * 0.5, settings.window_size * 0.5);
						matrixPointer.preConcat(pointer[style_pointer].matrix);
						canvas.drawBitmap(pointer[style_pointer].bmp, matrixPointer, null);
					} else {
						matrixPointer.reset();
						matrixPointer.postRotate(yawNew - 90);
						matrixPointer.postTranslate(settings.window_size * 0.5, settings.window_size * 0.5);
						matrixPointer.preConcat(iconMatrix);
						canvas.drawBitmap(heads[63] || heads[0], matrixPointer, null);
					}
				}
				canvas.restore();
				if (bmpBorder !== null) {
					canvas.drawBitmap(bmpBorder, 0, 0, null);
				}
				mapView.unlockCanvasAndPost(canvas);
			}
		} catch(e) {
			log.e("UpdateMap", e);
		}
	});
}());
var bmpPaint = new android.graphics.Paint(),
	mapView = new android.view.TextureView(context),
	mapWindow = function () {
	var btnSet = new android.widget.Button(context),
		btnZoomIn,
		btnZoomOut,
		textInfo = new android.widget.TextView(context),
		mapLp = new android.widget.RelativeLayout.LayoutParams(settings.window_size , settings.window_size ),
		btnZoomInLp = new android.widget.RelativeLayout.LayoutParams(settings.button_size * density, settings.button_size * density),
		btnZoomOutLp = new android.widget.RelativeLayout.LayoutParams(settings.button_size * density, settings.button_size * density),
		textInfoLp = new android.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT),
		layout = new android.widget.RelativeLayout(context),
		mapWin = new android.widget.PopupWindow(layout, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT, android.widget.LinearLayout.LayoutParams.WRAP_CONTENT),
		btnActions = {
			set : function () {
				if (!setWindow) {
					setWindow = settingsUI(
						["MiniMap Mod Options", "Ok",
						["sectionDivider", "Graphics"],
						 ["keyValue", "multipleChoice", "MiniMap type", "map_type", ["basic surface (fast)", "surface", "cave"]],
						 ["keyValue", "slider", "Minimap render distance", "radius", 1, checkRenderDistance() + 4, 1, " chunks"],
						 ["keyValue", "slider", "Zoom", "map_zoom", 10, 100, 1, "%"],
						 ["subScreen", "Icons and Indicators ", ["Icons and Indicators", "Ok",
							["sectionDivider", "Entity"],
							 ["keyValue", "multipleChoice", "pointer style", "style_pointer", ["crosshairs", "arrow", "minecraft", "head"]],
							 ["checkBox", "hide_underground_mob", "hide entities below sea level"],
							 ["checkBox", "show_player", "you"],
							 ["checkBox", "show_otherPlayer", "other players"],
							 ["checkBox", "show_passive", "passive mobs"],
							 ["checkBox", "show_hostile", "hostile mobs"],
							["sectionDivider", "Icon"],
							 ["checkBox", "show_chest", "chests"]]],
						["sectionDivider", "View"],
						 ["keyValue", "multipleChoice", "Position", "window_rawPosition", ["top left", "top left (offset)", "top right", "bottom left", "bottom right"], "window_gravity", [51, 51, 53, 83, 85], "window_y", [0, 40 * density, 40 * density, 0, 0]],
						 ["keyValue", "slider", "Size", "window_rawSize", 5, 100, 5, "%"],
						 ["keyValue", "slider", "Opacity", "map_alpha", 20, 100, 1, "%"],
						 ["keyValue", "slider", "Button size", "button_size", 20, 60, 1, "dp"],
						 ["checkBox", "show_info", "Coordinates visible"],
						 ["checkBox", "show_zoomBtn", "Zoom Buttons visible"],
						["sectionDivider", "Style"],
						 ["keyValue", "multipleChoice", "border style", "style_border", ["none", "simple", "colourful"]],
						 ["keyValue", "multipleChoice", "window shape", "style_shape", ["square", "circle"]],
						["sectionDivider", "Other"],
						 ["checkBox", "updateCheck", "Check for updates " + (settings.updateVersion > curVersion ? "(update available)" : "")],
						 ["subScreen", "Advanced ", ["Advanced", "Ok",
							["keyValue", "slider", "Minimap max frequency", "delay", 1, 40, 1, " fps"],
							["keyValue", "slider", "Threads count", "threadCount", 1, 12, 1, ""],
							["checkBox", "debug_mode", "Debug mode"]]],
						 ["subScreen", "MiniMap Mod info ", ["MiniMap Mod info", "Ok",
							["keyValue", "text", "Version ", curVersion.toFixed(1)],
							["keyValue", "text", "Made by", "MxGoldo"],
							["keyValue", "text", "<a href=http://www.minecraftforum.net/forums/minecraft-pocket-edition/mcpe-mods-tools/2336349>minecraftforum.net thread</a>", ""]
						]]]).show();
				} else {
					setWindow.show();
				}
			}
		};
	bmpPaint.setXfermode(new android.graphics.PorterDuffXfermode(android.graphics.PorterDuff.Mode.SRC));
	mapView.setId(1);
	mapView.setBackgroundColor(settings.style_shape ? 0 : -12303292);
	mapView.setVisibility(android.view.View.GONE);
	mapView.setAlpha(settings.map_alpha / 100);
	mapLp.addRule(android.widget.RelativeLayout.ALIGN_PARENT_TOP);
	mapView.setOnClickListener(function(v){
		changeMapState();
	});
	mapView.setOnLongClickListener(function(v) {
		
		return true;
	});
	btnSet.setBackgroundResource(android.R.drawable.ic_menu_mylocation);
	btnSet.setVisibility(android.view.View.VISIBLE);
	btnSet.setLayoutParams(new android.widget.LinearLayout.LayoutParams(settings.button_size * density, settings.button_size * density));
	btnSet.setOnClickListener(function(v) {
		changeMapState();
	});
	btnSet.setOnLongClickListener(function(v) {
		
		return true;
	});
	textInfo.setId(2);
	textInfo.setVisibility(android.view.View.GONE);
	textInfoLp.addRule(android.widget.RelativeLayout.BELOW, 1);
	textInfoLp.addRule(android.widget.RelativeLayout.ALIGN_LEFT, 1);
	textInfoLp.addRule(android.widget.RelativeLayout.ALIGN_RIGHT, 1);
	textInfo.setTextSize(15);
	textInfo.setPadding(3 * density, 0, 0, 0);
	textInfo.setBackgroundColor(android.graphics.Color.argb(204, 136, 136, 136));
	textInfo.setTextColor(android.graphics.Color.WHITE);
	btnZoomOut = minecraftButton("-", settings.button_size, settings.button_size);
	btnZoomOut.setId(3);
	btnZoomOut.setVisibility(android.view.View.GONE);
	btnZoomOutLp.addRule(android.widget.RelativeLayout.BELOW, 2);
	btnZoomOut.setOnClickListener(function(v) {
		if (settings.map_zoom * 1.2 >= 100) {
			android.widget.Toast.makeText(context, "minimum zoom reached", android.widget.Toast.LENGTH_SHORT).show();
			settings.map_zoom = 100;
		} else {
			settings.map_zoom = Math.round(settings.map_zoom * 1.2);
		}
		settingsChanged("map_zoom");
		saveSettings();
	});
	btnZoomIn = minecraftButton("+", settings.button_size, settings.button_size);
	btnZoomIn.setId(4);
	btnZoomIn.setVisibility(android.view.View.GONE);
	btnZoomInLp.addRule(android.widget.RelativeLayout.BELOW, 2);
	btnZoomInLp.addRule(android.widget.RelativeLayout.RIGHT_OF, 3);
	btnZoomIn.setOnClickListener(function(v) {
		if (settings.map_zoom * 0.8 <= 10) {
			android.widget.Toast.makeText(context, "maximum zoom reached", android.widget.Toast.LENGTH_SHORT).show();
			settings.map_zoom = 10;
		} else {
			settings.map_zoom = Math.round(settings.map_zoom * 0.8);
		}
		settingsChanged("map_zoom");
		saveSettings();
	});
	layout.addView(btnSet);
	layout.addView(mapView, mapLp);
	layout.addView(btnZoomIn, btnZoomInLp);
	layout.addView(btnZoomOut, btnZoomOutLp);
	layout.addView(textInfo, textInfoLp);
	mapWin.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
	return {
	setInfo: function () {
		context.runOnUiThread(function() {
			textInfo.setText("X:" + Math.floor(Player.getX()) + " Y:" + Math.floor(Player.getY() - 2) + " Z:" + Math.floor(Player.getZ()));
		});
	},
	resetVisibility: function () {
		context.runOnUiThread(function() {
			var visible = android.view.View.VISIBLE, gone = android.view.View.GONE;
			if (map_state) {
				btnSet.setVisibility(gone);
				mapView.setVisibility(visible);
				btnZoomIn.setVisibility(settings.show_zoomBtn ? visible : gone);
				btnZoomOut.setVisibility(settings.show_zoomBtn ? visible : gone);
				textInfo.setVisibility(settings.show_info ? visible : gone);
			} else {
				btnSet.setVisibility(visible);
				mapView.setVisibility(gone);
				btnZoomIn.setVisibility(gone);
				btnZoomOut.setVisibility(gone);
				textInfo.setVisibility(gone);
			}
		});
	},
	show: function () {
		context.runOnUiThread(function() {
			mapWin.showAtLocation(context.getWindow().getDecorView(), settings.window_gravity, 0, settings.window_y);
		});
	},
	hide: function () {
		context.runOnUiThread(function() {
			mapWin.dismiss();
		});
	}};
}();

function entityRemovedHook(entity) {
	if (Entity.getEntityTypeId(entity) <= 63 && Entity.getEntityTypeId(entity) >= 10 ) {
		var index = entities.indexOf(entity)
		if (index > -1) {
			entities.splice(index, 1);
		}
	}

for(var i in arrows){
if (entity==arrows[i]){
arrows.splice(i, 1);
}}

}
function entityAddedHook(entity) {
	if (Entity.getEntityTypeId(entity) <= 63 && Entity.getEntityTypeId(entity) >= 10 ) {
		entities[entities.length] = entity;
	}

if (Entity.getRenderType(entity)==EntityRenderType.arrow){
if (Entity.getVelX(entity)!=0&&Entity.getVelY(entity)!=0&&Entity.getVelZ(entity)!=0){
arrows.push(entity);

}}

}
function minecraftButton(text, width, hight) {
	width = width || 40;
	hight = hight || 40;
	var button = new android.widget.Button(context);
	button.setText(text);
	button.setTextSize(15);
	button.setTextColor(android.graphics.Color.WHITE);
	button.setBackgroundDrawable(drawBtnBack(width * density, hight * density));
	return button;
}
function drawBtnBack(width, height) {
	var bmp = android.graphics.Bitmap.createBitmap(width, height, android.graphics.Bitmap.Config.ARGB_8888),
		canvas = new android.graphics.Canvas(bmp),
		paint = new android.graphics.Paint(),
		drawable;
	paint.setColor(android.graphics.Color.GRAY);
	paint.setMaskFilter(new android.graphics.EmbossMaskFilter([1, 1, 0.3], 0.7, 8, 4 * density));
	canvas.drawRect(0, 0, width, height, paint);
	drawable = new android.graphics.drawable.BitmapDrawable(bmp);
	drawable.setAlpha(204);
	return drawable;
}
function createPool() {
	if (pool != null) {
		log.write("shutdown thread pool");
		pool.shutdownNow();
	}
	pool = java.util.concurrent.Executors.newScheduledThreadPool(settings.threadCount);
	pool.setKeepAliveTime(60, java.util.concurrent.TimeUnit.SECONDS);
	pool.allowCoreThreadTimeOut(true);
	log.write("created new ScheduledThreadPool");
}
function scheduleChunk(xChunk, zChunk, delay) {
	pool.schedule(new java.lang.Runnable(function () {
		try {
			android.os.Process.setThreadPriority(android.os.Process.THREAD_PRIORITY_BACKGROUND);
			if (Math.abs(Math.floor((Z - zChunk)/ 16)) > settings.radius || Math.abs(Math.floor((X - xChunk) / 16)) > settings.radius) {return; }
			var ix = 16, iz = 16, x = xChunk + 16, z = zChunk - 1, mapDotArray = [], type = settings.map_type;
			if (Level.getTile(x - 16, 0, z + 16) === 95) {return; }
			if (!chunkLoaded(x - 16, z + 16)) {
				if (map_state) {
					scheduleChunk(xChunk, zChunk, 10);
				} else {
					delayChunksArrLock.acquire();
					delayChunksArr[delayChunksArr.length] = [xChunk, zChunk];
					delayChunksArrLock.release();
				}
				return;
			}
			do {
				do {
					mapDotArray[mapDotArray.length] = mapDot[type](x - ix, z + iz);
				} while (iz -= 1);
				iz = 16;
			} while (ix -= 1);
			if (java.lang.Thread.interrupted()) {return; }
			try {
				bmpSrcLock.acquire();
				bmpSrc.setPixels(mapDotArray, 0, 16, ((Math.floor(Z / 16) + settings.radius + 1) * 16) - zChunk, xChunk - ((Math.floor(X / 16) - settings.radius - 1) * 16), 16, 16);
			} finally {bmpSrcLock.release(); }
			redraw = true;
		} catch (e) {
			log.e("drawChunk", e);
		}
	}), delay, java.util.concurrent.TimeUnit.SECONDS);
}
var pointerPaint = {
	RED: (function() {
		var paint = new android.graphics.Paint();
		paint.setColorFilter(new android.graphics.LightingColorFilter(android.graphics.Color.RED, 0));
		return paint;
	})(),
	GREEN: (function() {
		var paint = new android.graphics.Paint();
		paint.setColorFilter(new android.graphics.LightingColorFilter(android.graphics.Color.GREEN, 0));
		return paint;
	})(),
}
var pointer = [
	new Pointer(
		(function() {
			var paint = new android.graphics.Paint(),
				bmp = android.graphics.Bitmap.createBitmap(displayHeight * 0.1, displayHeight * 0.1, android.graphics.Bitmap.Config.ARGB_8888),
				canvas = new android.graphics.Canvas(bmp);
			paint.setColor(android.graphics.Color.BLACK);
			canvas.drawLines([0, displayHeight * 0.05, displayHeight * 0.1, displayHeight * 0.05, displayHeight * 0.05, 0, displayHeight * 0.05, displayHeight * 0.1], paint);
			return bmp;
		})(),
		(function() {
			var matrix = new android.graphics.Matrix();
			matrix.setTranslate(-displayHeight * 0.05, -displayHeight * 0.05);
			return matrix;
		})(),
		false
	),
	new Pointer(
		(function() {
			var path = new android.graphics.Path(),
				paint = new android.graphics.Paint(),
				bmp = android.graphics.Bitmap.createBitmap(displayHeight * 0.025, displayHeight * 0.025, android.graphics.Bitmap.Config.ARGB_8888),
				canvas = new android.graphics.Canvas(bmp);
			path.moveTo(displayHeight * 0.0125, 0);
			path.lineTo(0, displayHeight * 0.025);
			path.lineTo(displayHeight * 0.0125, displayHeight * 0.015);
			path.lineTo(displayHeight * 0.025, displayHeight * 0.025);
			path.close();
			paint.setColor(android.graphics.Color.WHITE);
			canvas.drawPath(path, paint);
			paint.setColor(android.graphics.Color.BLACK);
			paint.setStyle(android.graphics.Paint.Style.STROKE);
			canvas.drawPath(path, paint);
			return bmp;
		})(),
		(function() {
			var matrix = new android.graphics.Matrix();
			matrix.setTranslate(-displayHeight * 0.0125, 0);
			return matrix;
		})(),
		true
	),
	new Pointer(
		decodeBmp("iVBORw0KGgoAAAANSUhEUgAAAAUAAAAHCAYAAADAp4fuAAAABHNCSVQICAgIfAhkiAAAAEFJREFUCJltjcENgDAQw0z3HyKj3CjpJOZVIRB+WfEj8OCRdYYkr2AS25rEE2yralsBFz8sgJlh783MAHB9n4HrBiyNJZtxPPDsAAAAAElFTkSuQmCC"),
		(function() {
			var matrix = new android.graphics.Matrix();
			matrix.setTranslate(-2.5, -4.5);
			matrix.postScale(displayHeight * 0.005, displayHeight * 0.005);
			return matrix;
		})(),
		true
	),
	new Pointer(
		decodeBmp("iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wUeEiAJpGBAngAAAhBJREFUOMtlk7ty1DAUhj9Zsh17SWZDZnMhYaChCSmYVFSpGIZnoU5LydPQUOxjMEC5TYqFZRg2YVA2Xt8lUchxdpPTSB7p/D7/ReLt2alrjGG1QikBcM7RWtt/36+/+gYF8P7MUlU1si0xagOAyyJ/0DBKUi6LnFGSEscRHz6VHmCtocn7y9N5SRSFPN9LAKiqmv0wQMVRD6qstRSLnJ0gIpRtfzD9veDd+ZjJZMLF+Jwnj1MALIpmkRPKlkCACoKAi8x1bZ7r7uYjrl3BcrlkOp3y9ZfhZeTYUQIr427SGCGWqMYYxt8kUgBCdEAleVFz8vMnWmsmfzb4sfBsjW36KbO8RIVS8uZkAEDbWpQKAJj/E1xdXQFwsNXy6pkkiOI1UcdfapSzhsMko7USVs7bqOT7548AnB5G7G0a4M6ZrAbnLEoEkoPddA25XS4QG47Xx3u9+rcVdw7MbwTWFV6DmdZrAEfDIaOqpqrqtTzshwHEETOt0XnobQylZJSkD/5wP0ijJMUApqoZJSnCSKDxGtiq7TNQVH69nwva0rtnvBu2cT4HIpAkW3cTKGCmNUfD4QNqfhKFbEviwQAhKpRzjpnWPqKDrV6DVT1uRbws8p6azjMcDiWEIJLbTK4zuF72SfSXQiIpgJj5TcZ2vEkYqe7FCgQacfzi6W2OCQCL6Pau27sVAgJjQfqsUZQV/wGmEfCfo9F8YgAAAABJRU5ErkJggg=="),
		(function() {
			var matrix = new android.graphics.Matrix();
			matrix.setTranslate(-8, -8);
			matrix.postScale(displayHeight * 0.0012, displayHeight * 0.0012);
			return matrix;
		})(),
		false
	)
]
function Pointer(bmp, matrix, rotate) {
	this.bmp = bmp;
	this.matrix = matrix;
	this.rotate = rotate;
}
var iconMatrix = (function() {
	var matrix = new android.graphics.Matrix();
	matrix.setTranslate(-9, -14);
	matrix.postScale(displayHeight * 0.0012, displayHeight * 0.0012);
	return matrix;
})();
var arrow = decodeBmp("iVBORw0KGgoAAAANSUhEUgAAABIAAAAXCAYAAAAGAx/kAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wkXCBYpv1t1DgAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAbUlEQVQ4y+3VQQpDIQxF0fu6MV2aO4uu7HVSoRQ0n99OCl4IjnLITMjza7YpAWit8f6udpQBpRQAxhhbUBlQawWg974FJ+QV8NkClCaSATtwHuGI8N0iwoAF2DbfJIkHP+pABzrQn0G68kNc6QlKrnBddYT83gAAAABJRU5ErkJggg==");
var heads = {
0: headArrow("iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsQAAALEAGtI711AAAAB3RJTUUH3wkVCRYIWPnH7AAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAA9klEQVQ4y63TO8rCQBSG4SfeJYWFIEiW4D5s7OzcQHpxDa7HytINuAix89LYBAmIjoUE/mn+JjnN3L6Z8/KdM8lkMgkQQgCtVgu83+9oTJIEtNttkV7N6FQvVfH5fEC32wVpmkbnz+czWtcnqCZ5noNerxdlLooi8uZ2u4HdbtcMQbJerwMMBgNQluUPrfODezweIMsycDqdGvagyrzdbsFisQCz2SzKfDwewX6/B5vNpiEPVqtVgOl0CobDITgcDpFwPp+D8/kMLpdLQwTL5TL8rfP9fv/3wng8jjqyfhWu12v0B0ajUSR4vV6g3+9HfVLt1yb4AgeiVR6weSbNAAAAAElFTkSuQmCC"),
10: headArrow("iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsQAAALEAGtI711AAAAB3RJTUUH3wkVCAQYPHjNbAAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAZklEQVQ4y2NkgIJbt279ZyABqKmpMTIwMDAwMVAIKDaAEYkN98K/f/+w28bEhKGXei7Y3KhDUiD61l8ZJIHIAmNcuPdtYFxAvVhATsoqampYFd+5dYv6SZkRm+A/pFSJ5l/GwReIAJzkF8KfuHVTAAAAAElFTkSuQmCC"),
11: headArrow("iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsQAAALEAGtI711AAAAB3RJTUUH3wkVCAMf7V3OCAAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAA5klEQVQ4y62SLW7DQBCFPztjKVVPUBxshfkArlmWpbgXKEyVkICCkIaUpDBSQipVKooWRcoFTH0EUx+gYOMEJCt1CgrqfWj37c/7NDPRcHB3AuhJBMDRnQB4flnyU2VZqv1+9wlATEeJJPoPSaLrgSg/yzIAFvMJALd9CUTwutoqY/r0CIBzTvlvixkA7+sP5XcnKIoCgLZtVReapgFgs9LdyPP8khzHYQgiPwf/Vfca+MW3OwLwZQ9/PhiPLjW4SSQwgU9O0xQAY4y6aK0FoKoqAB7MfWCCuq5Vsp8Dr99EfemFITgDfbg54HZ1708AAAAASUVORK5CYII="),
12: headArrow("iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsQAAALEAGtI711AAAAB3RJTUUH3wkVCAAr58RpfgAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAABHklEQVQ4y62SvUrEQBSFvySTH2MwbmXlIlrYWlgs5D0EKxfR0lcQRLsVSztL8XV8BAtTrSKCuJs1k7E401g7t5gLdy73nPnmRu31lQP4fH8DoB5toYh0lgUANrIApCt/W6ke888wi5Umm16KpsgAcIka7GIJQF5XUq7XvAUXyIGJJZXtjVVJNXMYlJPIO/qRQxd3Uq7yMA4iwAFYKxbz2e3fhqpUHgYAqrNzAMqyDOSgvbxxAMYr2fG2UJTrYuE87UgMmL8C0H19B/qFZMNTpgfg/m4GwMXRsSwW2riHp0cATqcn2otQDIz90KaRaB8mBxMAnl9aAIrdEQBN06gvS8Wm74MxMAD0VrMO93f09lx1V+ReeVO5W/pficM4+AVghEWaSP2iTgAAAABJRU5ErkJggg=="),
13: headArrow("iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsQAAALEAGtI711AAAAB3RJTUUH3wkVCAIGkC1XiQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAABPUlEQVQ4y62SsUrDUBSGv6RN7GoICAmYIUMha3ffQkTcBMFd3ayLg+gT2FX0DXTzCdybUSkSCo1DSpJCQ5M43N7E4BTas9x7zr3c+53/P7BhKABBEJQAZVkCMJ/PqwtFUVT7JEkAMAwDgH6/r3Tl4XQ6bbwcRdG/B2TEcYzjOACoAFmWtUaXtBWB/zoSha4orfJc5J2O6FXrAZAmMQD7J5c1ga7rrQlka5WIrusCsFgsAHi6OQVguRTtnd0/ix9VVRD7Pp7nKepWbJxMJuVoeA6As7crEFfZWoumC98/wsqjizsGg8EWCcIwBODt8RaA4cFh4+L1+wsAx1cPSOsrAulpmzBNszkHs9lMqL4eqo+vTwB6O70msqI0chUgTdPWBJqm1RqMx+Py70jbtl3/oNY65+vplKtlWcqmJvAL4KV5Q1seyu0AAAAASUVORK5CYII="),
14: headArrow("iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsQAAALEAGtI711AAAAB3RJTUUH3wkVCA4dtv3RaQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAABAklEQVQ4y7WSoU9CURTGf/eNgmw8QOsLb6MInWiyWSxsOjYpEBzNLAmS1TEC+hdgMIhBTUQ6WuDdwIYN35w0eJfwvIznnMXLl87Z+W3ft3OO4Fuj4atiQ9l8Tmz2zw89BeC6bmRu8U/FdCGl/BPUzj85cwkye7sALJcBAE+9RwUgRLiKme8DkEylt5RgOn0H4Gs+B8C2kxFw7HkA7MTjZhOsbx0EgQJIpTMANCrHEbB+cw+A/zELnS1LmE3QujxXAJ+LBGenJwDsHxwC8NZ/AeD66gLHzQNQa7YNf+JEDsPtO4X1UDtr2U6BiRxs6Q+0c7FY4qhc/RW+u+3Q7equbybBCgRARDqUFxSFAAAAAElFTkSuQmCC"),
15: headArrow("iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsQAAALEAGtI711AAAAB3RJTUUH3wkVCA0M92CiWAAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAA5klEQVQ4y2NcVx7zn4GBgeH7+68MDAwMDJyC3AzIfHSALs/EQCFgQRfAZTMuQLELBt4AFpifG7bsJkljg48rlVwAi9ebTz4xMDAwMHB0QcycesMHRWG2xhYGBgYGhh9l/xgYGBgYNlTGYY9GBgYGhv/fGRi+/fqNIcbIiamWsdbL4D8DAwODmowMAwMDA8MvBi6Gb79+M7x6dR9FoayMDAMXOyvD/58Qg289eUKjlHjg+DmGX3//Magp8KGI7z1yjYGNmYnBzVKDyukAXcDGWJnh268/DO8+vEURtzBQZOBiY6F+SgQAkglD+wSBimYAAAAASUVORK5CYII="),
16: headArrow("iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsQAAALEAGtI711AAAAB3RJTUUH3wkVCAwtohKDRwAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAzElEQVQ4y63SL07EUBDH8U9JIRiCgWs8w6aXqOMANeBwGCwXwIFAYNBkXS/RBNMDYGrr1vCnSRH0JbwVK7b9mcn8Mu/NNzOTPTgc4VgGPo3g/PXFfzVNk+Rnj8/gwEzlsXNUzPM8T/yiKMBHdfVHONXNJ7jxnRhPjsAwDIm/qa7BvZ/En0+wbcQtfPU9GG/vdn4wmyCLd7CvlpvBZoqX7fvOB29hBU6nWS1HEDuHEEBZlklhXdegbVuwDhcLE3Rdl3TupzuI2iY6WWoLv5WmMMWCKVO2AAAAAElFTkSuQmCC"),
17: headArrow("iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsQAAALEAGtI711AAAAB3RJTUUH3wkVCAwLcB8GugAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAA30lEQVQ4y51TOw6CQBB9ECsLDZEQYOmsOJwn8AAWHsDewiPYeQJCKCyIpQmLhkAIFrTauJtd2QXkdTuz8+bNz8AXiyB84w+8stQAgJlonC9XsGyHv12PAACeDwoAqMsCANA2Ff9jqthdj8D1CEjgS0QqmDoHCxZJRHWDBAw0y3v9EoFlO5L0MegoiM9H7LebTvbTYQeaXIYJbneqzabyGeIekHXIO04CX1l/ek3QNhXfA0lBXRZ85kPNGz2F37FOImDBTN0kBbqSzDHZaZYrs/cSsIA4irTBnWsUL26s/QOMaVD4M/hBCgAAAABJRU5ErkJggg=="),
19: headArrow("iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsQAAALEAGtI711AAAAB3RJTUUH3wkVCBwN076x3gAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAA0klEQVQ4y7WTvw5BMRSHv+ISQlKuBIk/YWTwBGaDN/CA3sBgNpgNrEJILJcmIsgl10BFBYv6TT3tl/ac8+sRnVYzAMhIB4CN8gHoD8eCJ33iQvyoiF4UcvGvoH5Zc9YyELo2JxwYB4nYxYjP93C7u3HRqGMpg9cue94agFopa4DzlQIgmZIADEYTYdcFLdfNA3A4HgDY7U8AyHT27QX2eqCUCgCkvNXYbTcMsDeYaI47J/7jgtbrv/Avxmg8ZsW+C9O5B8BssTT2q+UiAPWKa9eFKwzDPzoKq7SSAAAAAElFTkSuQmCC"),
20: headArrow("iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsQAAALEAGtI711AAAAB3RJTUUH3wkVCBYPx184eAAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAABDklEQVQ4y62Rv07CUBSHv0sLFHExJiwyiDHpaIirg4NxZOFJHHwKfQOegA13BgcHq4kO4CoOLBCqCX+KbamX4V4MTZCYtGc553fPub/zJUc4jiNZD0PLSOcf/ayLIPABECIDQIaEYQ4fW8rREADkrKLamM3pEUUShaFWSvthkBLBgX0CwHzsbp8sxOWuzokJxOWpLZMYJCf4eL2XAIfV81ij224C8N55BqB2dRvrv9w1UrrC1B0AcE0FgBt6AHSeHjZ+WM39Gvzl7H37/yNYFf2LEgD1xT7hIkLuqU2fmrB2ViVrGvRNI+UrdNtNCRDMxgBMZh5Tb85bbwTAlzsE4LhksWPlKRbyAJSP7HQIlhjFT+sbTWH0AAAAAElFTkSuQmCC"),
21: headArrow("iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsQAAALEAGtI711AAAAB3RJTUUH3wkVCBUEe6CyMwAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAABNElEQVQ4y52TPWrDQBCFP6/cqhEI4dYHSKFG+ABWKdw7BwiBQO6QKo2bNDlAUrgLKnOBsI3AOYDbIAxpUgun2MzuaB1DyMCi+Xk7q3lvd7KpOQJUc7B7EB/G8bmaAWhWJUUeAEXuloCLHJoKbzo2AP1754uXjwnLu8QDAZiVpzlUg9iydHAbZiUAy+sdAA+vCa11mP7gvlPZ1FoHyNLBN2lfulFTaQKDH88AFBclfzVpJDblH/b8FnPw0dFUcFOH7utFAOl8bKM/0FLF+uuGumaE0dbipXJEOYD4Oq9zk03NsZo7/WOyPr+Ss76MZfS1zNLBLx3/5guRRhMlp+h549nj+OQmrheBTAFvb90S296XvmaE0aaCp6sgl94gV9qf/iO7l9HuQSvY2vAS5bHp59wfAm/fWoh3ZA08iW0AAAAASUVORK5CYII="),
22: headArrow("iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsQAAALEAGtI711AAAAB3RJTUUH3wkVCBkk7Hvd9wAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAiklEQVQ4y2NgoBAwwhiXem3/w9h6xYcZ0RXikmei1AUUG8CI7LTLz3/AJTzd5OHs7bsewtm6khwMyF4ZeC+w/HaYAOcUTQxFeIEB4YWiV2/h7G2Rq5G0Gw+CWGB5fLkezlmfFg1nR7eeQYhXI8SR1Q+ShPT8SRY8IX29yUdQA7f6JzhbUmbaIEhIAMXkKewS1cHBAAAAAElFTkSuQmCC"),
32: headArrow("iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsQAAALEAGtI711AAAAB3RJTUUH3wkVCAUPprB56gAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAABG0lEQVQ4y62TsU7DQBBEn2OHWMEJBRAiKwVFQIiCDilFynwISFT5GUo+hYqClgYJiYY+SEgYkHU4tmxsiomLq3Pb3Gl3b2f2dse7vDlpAOocAHqhB4BJSwCqtc5OECi+21Vi1cjPlha0yK0VuSoPR30A+nEtpErIyZseFHXliEF7OZ5OANjpyhWFYpDnGQC1r7/x4wSANCscMZiMx6qslsiMeqw6cqTGAHAY72k6Zm0hb8+gF6rnh7sXK7BYngl5KOT722crPr8+d8PAmy+1iaP9AwAGfgTA0+OrlXixOAVg9bEC4Ps9c8RgdjVtAJpAG5f/6PcHoV37M9Hco6MQgNL8OZrC1yrVpiENBBvVFb/Y6ttYnSmvLBxp4R/CM1dNZKkXNgAAAABJRU5ErkJggg=="),
33: headArrow("iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsQAAALEAGtI711AAAAB3RJTUUH3wkVCAkN5AtXygAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAABUklEQVQ4y63TP0iVcRTG8c81/2CKovctwxJBEDRvOEZSbQXR4thSLq5iy4VECFHukn9Cve7u0RDYcJGoJDBQJ8OoQW2wNBwquChqvg6/SXDzPduBB873nPM8qelPozE8/54F16s6QHf0BNy+eBe8SufB3u4BWJ3/AUqcs1LNuUsx3LiVAT//bID2KPSbH7ZBy6NaUPwWCLLRi2QISq90VYKl3AqovxCB1tF28LuiCAq9yyBdmQbVY9UJEZRVlIP4IAW+LqyDLyOL4F/zr0Cy8BccZmIwWRxMiKCr/D643L8GOvM3Qb5vJiiOw4y3n9+A4bkhsF26lZAPppZyMbx+Nxd2fb8TblFYPyVsuBd8cOdl8Mfj4tOEbtBS3wqiqgbwsbB4pnBnPnxhf+M/mFgbT4hgdm8SXHtwFdRlakD/bA9oOmoDz7IDIRvLuyErDxuTITgBE2ldifRSs+UAAAAASUVORK5CYII="),
34: headArrow("iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsQAAALEAGtI711AAAAB3RJTUUH3wkVCAYvtvMK4QAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAA+ElEQVQ4y63QO4oCURCF4c9xaPEFbSqigTvQNRi7GEOhA6FTIzfiNtyBYKShIohvUJzoBjeZxD5RFXWqzk+V5vP5B57PJ6hWq+BwOID7/Q4qlQpoNpvg/X6DH1/qNyQHhcROpwPa7TZ4vV5gvV6Dx+NREEEoBoMBKJfLoNVqgev1Gi0EkuPxWBBBv9+PLp9OJ3C73cB+vwe9Xi9KDvqeoF6vg9lsFg2yLIuSp9NpNJ9MJsUQlBaLxQe63S6o1WpguVxGxvF4DDabDdhutwX9IHw7z/N/javVKupHo1FBBLvdDgyHQ5AkSWRoNBrgcrmANE3B+XwuhuAP0cRYqLWs0nQAAAAASUVORK5CYII="),
35: headArrow("iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsQAAALEAGtI711AAAAB3RJTUUH3wkVCAc7tTLv3QAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAABDklEQVQ4y63Su0oDYRAF4C8XNUkRRLGSIGiEYFBJoeRdrGx9HVFfwNInsLSKNmJALVSwSSWIwZD7uha7ARPsstP8c4bhP4czJ1Wv7YRwdP8Erg73/K3ROAD9wQCsP76CVnUbpM1Z2fDnZ4q5eNcE7YNdEARjcBwzn22WQEGYjILUqeiriYJ0JgV6/REYDodgIZsFnW4fNF/eE/LgOm7GQeT2zd0jOI/nJ/E7wRfbG1N4fgWtahnkwmmm65nFWXy5X0noCrWdrRDyuVx03/wS+O50wefXN1hdKcbzHsjnFxPyYNIUltdAo3ELKuVSbHOUi4fnN1Cv16OctD8SVhCG4b8Li9nMFA7ivExyM7eCX2nPVFxK67LHAAAAAElFTkSuQmCC"),
36: headArrow("iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsQAAALEAGtI711AAAAB3RJTUUH3wkVCAsVxVGtHgAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAABU0lEQVQ4y63Tv0vUcRzH8cdVV2c/1O8p6qUgDiWCkJGDNAj5BwROLerSUP0BgZDrDbmFg3EiIjXc0tDQckRzXR0ELsGhmHFqni13h5IY1/BZvNnve3zD682T9/P9TuTz+SZ8+LEMRm6Og3eFN87W+vBjkG7vBsm2JLjgnHXp6vUrYPb+C/C6+BKM3bsDSsUS6O3NhMSNVMuA8xMcNf6C/XoVjPeMgWqlBjL9uy2Bf7VjcLG9LR6CRLovakKyuw5eLbwFuY8LIJuYBEOjYSedc3MgFUUxEeRWck2oHv4GX4vfwFG6DJYmngf/mb6QqP4C05/nY7JQO/4DGifBwuj+QfDfnwDPvmTB1NYgeDL7KPQvz8REUK58B59K70FHFC6uZ+cWOO3cBIWBbfDwZ9jB4t5qTAQP7k6Dw/oeqBzshG/ragT/HbdBubIBnpbXQtC1eAj+A9SNWsc6q4V1AAAAAElFTkSuQmCC"),
37: headArrow("iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsQAAALEAGtI711AAAAB3RJTUUH3wkVCAoFwf2MOwAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAABRUlEQVQ4y32Ty27CMBBFz4ydpGxAILGrivo3/Yv+Z7+mrJESwaalJDNdmDxMgMkmdnKP53Etn18fzk20547joQZgtd0Qq8CjiABujrWOe2LZxXAb39sbkYigURCVBLDWOTUNdjGmQIBT3SAqGUALZbleE8orwN3TSedulmJ38btp99nGfvP3W+n+xp+rnWWi817HHpXKaksOuBsThrsjIrNf9ClAwa/Pwym05y7ren8axkzY150BjocaN6d8Hcc4FQsp7erNhnVcWO6Du4XZk7LMB3/E1XaDXYxT3Qwjc/M0e4OffdItdpJ5pPdHjFWghcwsGvRuvSio6NzKtzGIFRbv82+hUJabNVpoAojIuLixssb57EMVCGUglFdNKJO3p5fpVDcALDdrRMG6KzAIGpM4K6HfALKeaKGEQml/052MLzHr1z+EQa7SLRnZJQAAAABJRU5ErkJggg=="),
38: headArrow("iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsQAAALEAGtI711AAAAB3RJTUUH3wkVCA46E/dkAgAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAf0lEQVQ4y7WTsQqAMBBDX0U6dOoi+CvOTp39Tj/B2cn/EJxcu9TJoQe1hdZsdxdISDhljAkAWmsAvPd8QfI6KtHnFOReot6BVHznlKLk1TvIpZ5CuxYOdwNwrgqA0QUApm2IiPt8xbwltHGgrLWhpPfUvV0LpYrtWyj9wt8yeAASSTd0D702yQAAAABJRU5ErkJggg=="),
39: headArrow("iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsQAAALEAGtI711AAAAB3RJTUUH3wkVCA8c2OHQvgAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAApUlEQVQ4y2NgoBAwVjUV/GdgYGBoq5vAiE0BTB5ZDbIYE6UuoNgAFpizkira4c6a11EJ986b5xwYmpDFBt4L8Fhg+MEFF/z+/TsDAwMDw4cPH+BivLy8GJonTZrEOAi8AGNkZmb+Z2BgYNi0aRNcMiEhAc5esGABnO3j48PAwMDAICLDNRhiIS2z4j8DAwPDr+8vMCS5+GQQCv++x5CfOnXqIIgFABSwMEHtJUHQAAAAAElFTkSuQmCC"),
40: headArrow("iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsQAAALEAGtI711AAAAB3RJTUUH3wkVCAgpwROCWgAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAABJ0lEQVQ4y63Tu0okQRTG8V+P4+iMVxAREdlARBREEQyN9Gl8AU00MTYSfBhxTcRoYdlIYRdNnEAUBS+DOtNjb3C6A03tSr46RdU5/zqXpLawmsH++S+wtbIGpJ3Q9hvIWs9g4/oSHE/NgIpvrqRvfiWDnvoAWP99Cn7mJOlLRN7/+wfsjE/Gw2qtJIIDMtidXwYf/UHy0WqFFrnI1/DjHWje35ZDUD0qdp0ueLg4A4f58Wauhb03NvHJ/j7ByY9ZUM//Wng++nKxsF8rvWB7uqw+qM0uZlAtkKoRofvyCN6fn0BvXv9u3pFJY6CkHJCEx3oDvDWvov6DI9GJlZ7Q63+gMbcUJO12WQRp1D9L0/DcielLsuG4UesPfbiJB0OjMaQ3zXII/gMiIliJjt3yRAAAAABJRU5ErkJggg=="),
41: headArrow("iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsQAAALEAGtI711AAAAB3RJTUUH3wkVCAoohCLQTgAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAA30lEQVQ4y6WTsQ2EMBAEx+gDpAtphArcAxk1UBA1kFGAM1dAH4jQFhkf2TLG/tfrV0Iye+hub70o7/1FBudcPItIlQNoQjF9rLW3ZjUOQHnvr/ASPtJaU0JeF5F7g18hIqh93y/+wCuVN8/zrbgsCwDjON74aZriGo8Vwp7DMHAcBwBd17Gu68MfEaFp2/Yhq2RiiXPO0ZznWdwtTE/PeRMRQRljool93380zFqL1ppt2yKn0iSGwNRyUEpiVPBteo6gIirIw5RfXbjSXIUyxly/Tk9V/B/l2u+cGlXjAN472J2vHjgcIgAAAABJRU5ErkJggg=="),
42: headArrow("iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsQAAALEAGtI711AAAAB3RJTUUH3wkVCBAAAbqCbwAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAuElEQVQ4y2MUYGD4z8DAwPCBARUIQWkRNPFbUJoFSjMxUAgYOaEugAFuKC0As0EYyngLod5Aub+o5gJeqAu2oEl4o/G3ovF9qeYCGagL7tlCBQ5CaA2o0c+gCj/9g9D/7SG0ymFquYAP6gIJmAg01J9BQ/0LVFgSSvOiGUC5C3jQ0sEXtPQAcxkzTAEbqlModwEDmgs40fICNywzvMFuAMUuYEEXkIX5kQ9CvYPa/BUq/B1KK1PLBQBzxx7wSCywogAAAABJRU5ErkJggg=="),
43: headArrow("iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsQAAALEAGtI711AAAAB3RJTUUH3wkVCBUf8cV73wAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAABF0lEQVQ4y62SsUoDURBFzxoxRFdQBMNGRNBgIYKF2AYCWu1H2Imd+hX+gq1fYG2phU0QLFSCqCghGzQJAZMYjMqzuGOxdd40d+bOe8zlzgQflbwDCDtvAFBaAaBx9gRAtCmavuFGSfhdB2CMEWO828oAEC6ti7m8TU+2aFSF0VRPSbXvR0FwfoAD2IlF1F+EC1v2opnm/+P+Dk8eRGuWbe8DUA5PAXi4GWhyRe3yYU58b1cKjk48eRAX5cHxnoikJXTvwuVZ4XPHPswL8+BLwaoUTP+mGxc6ROasjovC10LB1pJ42kJmQsl1zZif0Cbr4tpGXz3afbgkpXB0DxYn5UEW7XngtP9coHrmU/UwK6nNr6Fp96TgD68IS+Ryu2FhAAAAAElFTkSuQmCC"),
44: headArrow("iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsQAAALEAGtI711AAAAB3RJTUUH3wkVCBoQ5uJ6gQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAABJUlEQVQ4y62TvU4CQRSFv/2DBWRR/AkkBht7H8NSKxPfwIreyk5fwWegsbGxsyOxsDUWKmY1QUUxmtVddmfGYpfEydKxp7w5Oee7k7nG8VlXAVz2+wCUKw6pBP/17gcAuKoMQGhEAJjMKXvgPwIQBTEASujNk1AC4FRsAOpiIeWzREEEo5fPbOU0cRIIrbnVXgagWnUBaDZWAHi9HhVEMHx+A+CuN5hpuOdh5ryz0ymIYJpxdXMOwOneIQAX6x+acfupCcBB7wSA/aPuNCCvUAhELHMz17JyXmNrd1MB2G6WJRUilqwlevZXA+ySxe9PAkASJoW9ga6x/41MJIurHgClDHt4O8a0TZY2PM1fPIHXriFiiUpPg0imP7PeqmE5+b65Cf4AjI9iM/4hVAEAAAAASUVORK5CYII=")
};
function headArrow(string) {
	var head = decodeBmp(string),
		bmp = android.graphics.Bitmap.createBitmap(arrow.getWidth(), arrow.getHeight(), android.graphics.Bitmap.Config.ARGB_8888),
		canvas = new android.graphics.Canvas(bmp);
	canvas.drawBitmap(arrow, 0, 0, null);
	canvas.drawBitmap(head, 1, 6, null);
	return bmp;
}
function decodeBmp(string) {
	string = android.util.Base64.decode(string, 0);
	return android.graphics.BitmapFactory.decodeByteArray(string, 0, string.length);
}
function drawBorderBmp() {
	var bmp = android.graphics.Bitmap.createBitmap(settings.window_size, settings.window_size, android.graphics.Bitmap.Config.ARGB_8888),
		canvas = new android.graphics.Canvas(bmp),
		paint = new android.graphics.Paint();
	paint.setMaskFilter(new android.graphics.EmbossMaskFilter([1, 1, 0.3], 0.7, 8, 3 * density));
	switch (settings.style_border) {
	case 1:
		paint.setColor(android.graphics.Color.rgb(153, 135, 108));
		break;
	case 2:
		paint.setShader(new android.graphics.LinearGradient(0, 0, settings.window_size * 0.5, settings.window_size, [android.graphics.Color.GREEN, android.graphics.Color.YELLOW, android.graphics.Color.GREEN], null, android.graphics.Shader.TileMode.REPEAT));
		break;
	default:
		return null;
	}
	canvas.drawPath(createPath(true, true), paint);
	return bmp;
}
function createPath(outer, inner) {
	var path = new android.graphics.Path(),
		size = settings.window_size;
	path.setFillType(android.graphics.Path.FillType.EVEN_ODD);
	if (settings.style_shape === 1) {
		if (inner) {path.addCircle(size / 2, size / 2, size / 2 - (7 * density), android.graphics.Path.Direction.CW); }
		if (outer) {path.addCircle(size / 2, size / 2, size / 2, android.graphics.Path.Direction.CW); }
		return path;
	} else {
		if (inner) {path.addRect(7 * density, 7 * density, size - (7 * density), size - (7 * density), android.graphics.Path.Direction.CW); }
		if (outer) {path.addRect(0, 0, size, size, android.graphics.Path.Direction.CW); }
		return path;
	}
}
function chunkLoaded(ix, iz) {
	var iy = 130;
	do {
		if (Level.getTile(ix, 130 - iy, iz)) {return true; }
	} while(iy -= 10);
	return false;
}
mapDot = [
	function basicSurfaceMap(ix, iz) {
		var iy = 130, deltaY = 10, colors = {1: -8487298, 3: -7970749, 4: -8487298, 8: -14000385, 9: -14000385, 10: -637952, 11: -637952, 12: -2370656, 13: -8618884, 17: -10005725,
											 18: -13534192, 24: -3817840, 48: -10193052, 78: -984069, 79: -5255937, 82: -6314831, 98: -8487298, 99: -7509421, 100: -4774107,
											 109: -8487298, 110: -9542807, 128: -3817840, 159: -2968927, 161: -8028101, 162: -13293288, 172: -6857405, 174: -5255937, 243: -10797283};
		do {
			if (Level.getTile(ix, iy - 10, iz)) {
				if (deltaY === 10) {
					deltaY = 1;
					iy += 10;
				} else {
					return colors[Level.getTile(ix, iy - 10, iz)] || -8540361;
				}
			}
		} while (iy -= deltaY);
		return 0;
	},
	function minecraftMap(ix, iz) {
		var color, block, iy = 130, deltaY = 10, o = android.graphics.Color;
		do {
			if (Level.getTile(ix, iy - 10, iz)) {
				if (deltaY === 10) {
					deltaY = 1;
					iy += 10;
				} else {
					block = Level.getTile(ix, iy - 10, iz);
					switch (block) {
					case 9:
						if (Level.getTile(ix, iy - 19, iz) === 9) {return -13882190; }
						if (Level.getTile(ix, iy - 16, iz) === 9) {return !(ix % 2) === !((iz + 1) % 2) ? -13882190 : -13224231; }
						if (Level.getTile(ix, iy - 14, iz) === 9) {return -13224231; }
						if (Level.getTile(ix, iy - 12, iz) === 9) {return !(ix % 2) === !((iz + 1) % 2) ? -13224231 : -12632068; }
						return -12632068;
					case 12:
						if (Level.getData(ix, iy - 10, iz)) {color = 0xd57d32; } else {color = 0xf4e6a1; }
						break;
					case 35:
					case 159:
					case 171:
						color = [0xfcf9f2, 0xd57d32, 0xb04bd5, 0x6597d5, 0xe2e232, 0x7dca19, 0xef7da3, 0x4b4b4b, 0x979797, 0x4b7d97, 0x7d3eb0, 0x324bb0, 0x654b32, 0x657d32, 0x973232, 0x191919][Level.getData(ix, iy - 10, iz)];
						break;
					case 5:
					case 85:
					case 157:
					case 158:
						color = [0x8d7647, 0x7e5430, 0xf4e6a1, 0x956c4c, 0xd57d32, 0x654b32, 0, 0, 0x8d7647, 0x7e5430, 0xf4e6a1, 0x956c4c, 0xd57d32, 0x654b32, 0, 0][Level.getData(ix, iy - 10, iz)];
						break;
					case 43:
					case 44:
						color = [0x6f6f6f, 0xf4e6a1, 0x8d7647, 0x6f6f6f, 0x973232, 0x6f6f6f, 0xfcfcfc, 0x6f0200, 0x6f6f6f, 0xf4e6a1, 0x8d7647, 0x6f6f6f, 0x973232, 0x6f6f6f, 0xfcfcfc, 0x6f0200][Level.getData(ix, iy - 10, iz)];
						break;
					case 54:
						chests[chests.length] = [ix + 0.5, iz + 0.5];
					default:
						color = {2: 0x7db037, 3: 0x956c4c, 6: 0x007b00, 8: 0x3f3ffc, 10: 0xfc0000, 11: 0xfc0000, 17: 0x8d7647, 18: 0x007b00, 19: 0xe2e232, 22: 0x4981fc, 24: 0xf4e6a1, 30: 0xfcfcfc, 31: 0x007b00, 32: 0x8d7647, 37: 0x007b00, 38: 0x007b00, 39: 0x007b00, 40: 0x007b00, 41: 0xf7eb4c, 42: 0xa5a5a5, 45: 0x973232, 46: 0xfc0000, 47: 0x8d7647, 49: 0x191919, 53: 0x8d7647, 54: 0x8d7647, 57: 0x5bd8d2, 59: 0x007b00, 60: 0x956c4c, 78: 0xfcfcfc, 79: 0x9e9efc, 80: 0xfcfcfc, 81: 0x007b00, 82: 0xa2a6b6, 83: 0x007b00, 86: 0xd57d32, 87: 0x6f0200, 91: 0xd57d32, 99: 0x8d7647, 100: 0x973232, 103: 0x7dca19, 104: 0x007b00, 105: 0x007b00, 106: 0x007b00, 107: 0x8d7647, 108: 0x973232, 110: 0x7d3eb0, 111: 0x007b00, 112: 0x6f0200, 113: 0x6f0200, 114: 0x6f0200, 121: 0xf4e6a1, 128: 0xf4e6a1, 133: 0x00d639, 134: 0x7e5430, 135: 0xf4e6a1, 136: 0x956c4c, 141: 0x007b00, 142: 0x007b00, 152: 0xfc0000, 155: 0xfcfcfc, 156: 0xfcfcfc, 161: 0x007b00, 162: 0x8d7647, 163: 0xd57d32, 164: 0x654b32, 170: 0xf7eb4c, 172: 0xd57d32, 174: 0x9e9efc, 175: 0x007b00, 183: 0x7e5430, 184: 0xf4e6a1, 185: 0x956c4c, 187: 0xd57d32, 186: 0x654b32, 243: 0x7e5430, 244: 0x007b00};
						color = color[block] || 0x6f6f6f;
					}
					if (Level.getTile(ix - 1, iy - 9, iz)) {
						return o.rgb(o.red(color) * (180 / 255), o.green(color) * (180 / 255), o.blue(color) * (180 / 255));
					}
					if (Level.getTile(ix - 1, iy - 10, iz)) {
						return o.rgb(o.red(color) * (220 / 255), o.green(color) * (220 / 255), o.blue(color) * (220 / 255));
					}
					return o.rgb(o.red(color), o.green(color), o.blue(color));
				}
			}
		} while (iy -= deltaY);
		return 0;
	},
	function caveMap(ix, iz) {
		var count = 0, block = 1, blockNew, iy = 96, y, r, g, b, increment = 3;
		do {
			blockNew = Level.getTile(ix, iy - 3, iz);
			switch (blockNew) {
			case 0:
			case 17:
			case 18:
			case 20:
			case 50:
			case 64:
			case 66:
			case 106:
			case 127:
			case 161:
			case 162:
				blockNew = 1;
				break;
			case 8:
			case 9:
				blockNew = 0;
				if (count > 1) {r = r || 1; g = g || 1; b = b || 255; blockNew = 1}
				break;
			case 10:
			case 11:
				blockNew = 0;
				if (count > 1) {r = r || 255; g = g || 1; b = b || 1; blockNew = 1}
				break;
			case 4:
			case 48:
				blockNew = 2;
				if (count > 2) {r = r || 1; g = g || 255; b = b || 255}
				break;
			case 97:
			case 98:
				blockNew = 2;
				if (count > 2) {r = r || 255; g = g || 1; b = b || 255}
				break;
			case 54:
				chests[chests.length] = [ix + 0.5, iz + 0.5];
			default:
				blockNew = 2;
			}
			if (blockNew !== block) {count += blockNew; y = iy}
			if (count === 5) {
				iy += 3;
				increment = 1;
				count = 6;
				blockNew = 1;
			} else if (count === 8) {
				r = r || 150; g = g || 255; b = b || 0;
				return android.graphics.Color.rgb(r * (0.8 * (y / 127) + 0.2), g * (0.9 * (y / 127) + 0.1), b * (0.9 * (y / 127) + 0.1));
			}
			block = blockNew;
		} while (iy -= increment);
		y = y || 127;
		r = 255; g = 255; b = 255;
		return android.graphics.Color.rgb(r * (0.8 * (y / 127) + 0.2), g * (0.8 * (y / 127) + 0.2), b * (0.8 * (y / 127) + 0.2));
	}
];
function checkRenderDistance() {
	var options = load(android.os.Environment.getExternalStorageDirectory().getPath() + "/games/com.mojang/minecraftpe/", "options.txt").split("\n"), i;
	if (options != "") {
		for (i = 0; i < options.length; i += 1) {
			options[i] = options[i].split(":");
			if (options[i][0] === "gfx_renderdistance_new") {
				return Math.round(parseInt(options[i][1], 10) / 16);
			}
		}
	}
	return 6;
}
function saveSettings() {
	var settingsString = "", p;
	for (p in settings) {
		if (settings.hasOwnProperty(p)) {
			if (settingsString !== "") {settingsString += "\n"; }
			settingsString += p + ":" + settings[p];
		}
	}
	save(android.os.Environment.getExternalStorageDirectory().getPath() + "/games/com.mojang/minecraftpe/mods/", "minimap.txt", settingsString);
}
function changeMapState() {
	var i;
	map_state = !map_state;
	log.write("change mapState to " + map_state);
	mapWindow.resetVisibility();
	if (map_state) {
		delayChunksArrLock.acquire();
		i = delayChunksArr.length;
		while (i--) {
			scheduleChunk(delayChunksArr[i][0], delayChunksArr[i][1], 0);
		}
		delayChunksArr = [];
		delayChunksArrLock.release();
		scheduledFutureUpdateMap = poolTick.scheduleWithFixedDelay(runnableUpdateMap, 1000, Math.round(1000 / settings.delay), java.util.concurrent.TimeUnit.MILLISECONDS);
		scheduleChunk(Math.floor(X / 16) * 16, Math.floor(Z / 16) * 16, 0);
	} else {
		scheduledFutureUpdateMap.cancel(false);
	}
}
function settingsChanged(key) {
	log.write("settingsChanged; key = " + key + " / new Value = " + settings[key]);
	switch (key) {
	case "radius":
		var i, j, widthOld = bmpSrc.getWidth(), widthNew = ((settings.radius + 1) * 2 + 1) * 16, xChunk = Math.floor(X / 16) * 16, zChunk = Math.floor(Z / 16) * 16;
		try {
			bmpSrcLock.acquire();
			bmpSrcCopy = android.graphics.Bitmap.createBitmap(widthNew, widthNew, android.graphics.Bitmap.Config.ARGB_8888);
			canvasBmpSrcCopy.setBitmap(bmpSrcCopy);
			canvasBmpSrcCopy.drawBitmap(bmpSrc, (widthNew - widthOld) / 2, (widthNew - widthOld) / 2, null);
			bmpSrc = android.graphics.Bitmap.createBitmap(widthNew, widthNew, android.graphics.Bitmap.Config.ARGB_8888);
			canvasBmpSrc.setBitmap(bmpSrc);
			canvasBmpSrc.drawBitmap(bmpSrcCopy, 0, 0, null);
		} finally {
			bmpSrcLock.release();
		}
		minZoom = settings.window_size / (settings.radius * 2 * 16);
		absZoom = (100 / settings.map_zoom) * minZoom;
		if (widthNew > widthOld) {
			for (i = (widthOld - 16) / 2; i <= settings.radius * 16; i += 16) {
				for (j = 0; j < i; j += 16) {
					if (map_state) {
						scheduleChunk(xChunk + j + 16, zChunk + i, 0);
						scheduleChunk(xChunk + j, zChunk - i, 0);
						scheduleChunk(xChunk - j, zChunk + i, 0);
						scheduleChunk(xChunk - j - 16, zChunk - i, 0);
						scheduleChunk(xChunk + i, zChunk + j, 0);
						scheduleChunk(xChunk + i, zChunk - j - 16, 0);
						scheduleChunk(xChunk - i, zChunk + j + 16, 0);
						scheduleChunk(xChunk - i, zChunk - j, 0);
					} else {
						delayChunksArrLock.acquire();
						delayChunksArr[delayChunksArr.length] = [xChunk + j + 16, zChunk + i];
						delayChunksArr[delayChunksArr.length] = [xChunk + j, zChunk - i];
						delayChunksArr[delayChunksArr.length] = [xChunk - j, zChunk + i];
						delayChunksArr[delayChunksArr.length] = [xChunk - j - 16, zChunk - i];
						delayChunksArr[delayChunksArr.length] = [xChunk + i, zChunk + j];
						delayChunksArr[delayChunksArr.length] = [xChunk + i, zChunk - j - 16];
						delayChunksArr[delayChunksArr.length] = [xChunk - i, zChunk + j + 16];
						delayChunksArr[delayChunksArr.length] = [xChunk - i, zChunk - j];
						delayChunksArrLock.release();
					}
				}
			}
		}
		redraw = true;
		break;
	case "map_type":
		if (pool.getActiveCount() > 0) {
			createPool();
		}
		X = undefined;
		break;
	case "map_zoom":
		absZoom = (100 / settings.map_zoom) * minZoom;
		redraw = true;
		break;
	case "map_alpha":
		mapView.setAlpha(settings.map_alpha / 100);
		break;
	case "window_rawSize":
		settings.window_size = (settings.window_rawSize / 100) * displayHeight;
		var lp = mapView.getLayoutParams();
		lp.height = settings.window_size;
		lp.width = settings.window_size;
		mapView.setLayoutParams(lp);
		redraw = true;
		bmpBorder = drawBorderBmp();
		if (settings.style_border !== 0) {
			pathBorder = createPath(false, true);
		} else {
			pathBorder = createPath(true, false);
		}
		redraw = true;
		minZoom = settings.window_size / (settings.radius * 2 * 16);
		absZoom = (100 / settings.map_zoom) * minZoom;
		break;
	case "window_rawPosition":
		mapWindow.hide();
		mapWindow.show();
		break;
	case "style_shape":
		if (settings.style_border !== 0) {
			pathBorder = createPath(false, true);
		} else {
			pathBorder = createPath(true, false);
		}
	case "style_border":
		if (settings.style_border !== 0) {
			pathBorder = createPath(false, true);
		} else {
			pathBorder = createPath(true, false);
		}
		bmpBorder = drawBorderBmp();
		redraw = true;
		break;
	case "style_pointer":
		redraw = true;
		break;
	case "show_info":
	case "show_zoomBtn":
		mapWindow.resetVisibility();
		break;
	case "delay":
		scheduledFutureUpdateMap.cancel(false);
		scheduledFutureUpdateMap = poolTick.scheduleWithFixedDelay(runnableUpdateMap, 1000, Math.round(1000 / settings.delay), java.util.concurrent.TimeUnit.MILLISECONDS);
		break;
	case "threadCount":
		pool.setCorePoolSize(settings.threadCount);
		break;
	}
}
function settingsClosed() {
	saveSettings();
}
function settingsUI() {
	var textSize = 17,
		padding = 10,
		context = com.mojang.minecraftpe.MainActivity.currentMainActivity.get(),
		alert = new android.app.AlertDialog.Builder(context),
		scroll = new android.widget.ScrollView(context),
		layout = new android.widget.LinearLayout(context),
		i,
		len = arguments[0].length,
		ruler,
		rulerLp = new android.view.ViewGroup.LayoutParams(android.view.ViewGroup.LayoutParams.MATCH_PARENT, 2),
		addOption = {
		checkBox : function (args) {
			var layoutElement = new android.widget.RelativeLayout(context),
				checkBtn = new android.widget.CheckBox(context),
				checkBtnLp = new android.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT),
				text = new android.widget.TextView(context),
				textLp = new android.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
			text.setTextSize(textSize);
			text.setText(args[2]);
			checkBtn.setId(1);
			checkBtn.setChecked(Boolean(settings[args[1]]));
			checkBtn.setOnCheckedChangeListener(function(buttonView, isChecked) {
				if (isChecked) {settings[args[1]] = 1; } else {settings[args[1]] = 0; }
				settingsChanged(args[1]);
			});
			checkBtnLp.addRule(android.widget.RelativeLayout.ALIGN_PARENT_RIGHT);
			checkBtnLp.addRule(android.widget.RelativeLayout.CENTER_VERTICAL);
			textLp.addRule(android.widget.RelativeLayout.ALIGN_PARENT_LEFT);
			textLp.addRule(android.widget.RelativeLayout.CENTER_VERTICAL);
			textLp.addRule(android.widget.RelativeLayout.LEFT_OF, 1);
			layoutElement.addView(checkBtn, checkBtnLp);
			layoutElement.addView(text, textLp);
			layoutElement.setPadding(padding, padding * 0.5, padding, padding * 0.5);
			return layoutElement;
		},
		subScreen : function (args) {
			var text = new android.widget.TextView(context);
			text.setTextSize(textSize);
			text.setText(args[1] + " >");
			text.setPadding(padding, padding, padding, padding);
			text.setOnClickListener(function(v){
				settingsUI(args[2]).show();
			});
			return text;
		},
		sectionDivider : function (args) {
			var text = new android.widget.TextView(context);
			text.setTextSize(textSize * 0.9);
			text.setText(args[1]);
			text.setTextColor(android.graphics.Color.WHITE)
			text.setBackgroundDrawable(new android.graphics.drawable.GradientDrawable(android.graphics.drawable.GradientDrawable.Orientation.LEFT_RIGHT , [android.graphics.Color.rgb(0, 127, 0), android.graphics.Color.rgb(63, 95, 0), android.graphics.Color.rgb(0, 63, 0)]));
			text.setPadding(padding, 0, padding, 0);
			return text;
		},
		keyValue : function (args) {
			var layoutElement = new android.widget.RelativeLayout(context),
				text = new android.widget.TextView(context),
				textLp = new android.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT),
				textValue = new android.widget.TextView(context),
				textValueLp = new android.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
			text.setTextSize(textSize);
			text.setText(android.text.Html.fromHtml(args[2]));
			text.setMovementMethod(android.text.method.LinkMovementMethod.getInstance());
			textValue.setTextSize(textSize);
			textValue.setTextColor(android.graphics.Color.rgb(100, 255, 0));
			textValue.setId(1);
			switch (args[1]) {
			case "multipleChoice":
				if (args[4].length <= settings[args[3]]) {settings[args[3]] = 0}
				textValue.setText(args[4][settings[args[3]]]);
				textValue.setOnClickListener(function(v){
					var alert = new android.app.AlertDialog.Builder(context),
						listView = new android.widget.ListView(context),
						adapter = new android.widget.ArrayAdapter(context, android.R.layout.simple_list_item_single_choice, args[4]);
					listView.setAdapter(adapter);
					listView.setChoiceMode(android.widget.ListView.CHOICE_MODE_SINGLE);
					listView.setItemChecked(settings[args[3]], true);
					listView.setDivider(new android.graphics.drawable.GradientDrawable(android.graphics.drawable.GradientDrawable.Orientation.LEFT_RIGHT, [android.graphics.Color.GREEN, android.graphics.Color.YELLOW, android.graphics.Color.GREEN]));
					listView.setDividerHeight(2);
					listView.setPadding(padding, padding, padding, padding);
					listView.setOnItemClickListener(function(parent, view, position, id) {
						settings[args[3]] = position;
						for (var i = 5; i < args.length; i += 2) {settings[args[i]] = args[i + 1][position]; }
						textValue.setText(args[4][position]);
						settingsChanged(args[3]);
						alert.dismiss();
					});
					alert.setView(listView);
					alert.setTitle(args[2]);
					alert.setNegativeButton("Cancel", function(dialog, whichButton) {
						alert.dismiss();
					});
					alert = alert.show();
				});
				break;
			case "slider":
				textValue.setText(settings[args[3]] + args[7]);
				textValue.setOnClickListener(function(v){
					var alert = new android.app.AlertDialog.Builder(context),
						seekBar = new android.widget.SeekBar(context);
					seekBar.setMax((args[5] - args[4]) / args[6]);
					seekBar.setProgress((settings[args[3]] - args[4]) / args[6]);
					seekBar.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener({
						onProgressChanged: function(seekBar, progress, fromUser) {
							alert.setTitle(args[2] + "  " + (progress * args[6] + args[4]) + args[7]);
						}
					}));
					alert.setView(seekBar);
					alert.setTitle(args[2] + "  " + settings[args[3]] + args[7]);
					alert.setPositiveButton("Ok", function(dialog, whichButton) {
						settings[args[3]] = seekBar.getProgress() * args[6] + args[4];
						textValue.setText(settings[args[3]] + args[7]);
						settingsChanged(args[3]);
						alert.dismiss();
					});
					alert.setNegativeButton("Cancel", function(dialog, whichButton) {
						alert.dismiss();
					});
					alert = alert.show();
				});
				break;
			default:
				textValue.setText(String(args[3]));
			}
			textLp.addRule(android.widget.RelativeLayout.ALIGN_PARENT_LEFT);
			textLp.addRule(android.widget.RelativeLayout.CENTER_VERTICAL);
			textLp.addRule(android.widget.RelativeLayout.LEFT_OF, 1);
			textValueLp.addRule(android.widget.RelativeLayout.ALIGN_PARENT_RIGHT);
			textValueLp.addRule(android.widget.RelativeLayout.CENTER_VERTICAL);
			layoutElement.addView(textValue, textValueLp);
			layoutElement.addView(text, textLp);
			layoutElement.setPadding(padding, padding, padding, padding);
			return layoutElement;
		}};
	padding = padding * context.getResources().getDisplayMetrics().density;
	layout.setOrientation(android.widget.LinearLayout.VERTICAL);
	layout.setPadding(padding, 0, padding, 0);
	for (i = 2; i < len; i += 1) {
		layout.addView(addOption[arguments[0][i][0]](arguments[0][i]));
		if (i + 1 < len) {
			ruler = new android.view.View(context);
			ruler.setBackgroundDrawable(new android.graphics.drawable.GradientDrawable(android.graphics.drawable.GradientDrawable.Orientation.LEFT_RIGHT, [android.graphics.Color.GREEN, android.graphics.Color.YELLOW, android.graphics.Color.GREEN]));
			layout.addView(ruler, rulerLp);
		}
	}
	scroll.addView(layout);
	alert.setView(scroll);
	alert.setTitle(arguments[0][0]);
	alert.setPositiveButton(arguments[0][1], function(dialog,whichButton){
		settingsClosed();
	});
	return alert;
}
function save(path, filename, content) {
	try {
		java.io.File(path).mkdirs();
		var newFile = new java.io.File(path, filename);
		newFile.createNewFile();
		var outWrite = new java.io.OutputStreamWriter(new java.io.FileOutputStream(newFile));
		outWrite.append(content);
		outWrite.close();
	} catch (e) {
		log.e("save", e);
	}
}
function load(path, filename) {
	var content = "";
	if (java.io.File(path + filename).exists()) {
		var file = new java.io.File(path + filename),
			fos = new java.io.FileInputStream(file),
			str = new java.lang.StringBuilder(),
			ch;
		while ((ch = fos.read()) != -1) {str.append(java.lang.Character(ch)); }
		content = String(str.toString());
		fos.close();
	}
	return content;
}
function loadTxtFromUrl(url) {
	try {
		var content = new java.io.ByteArrayOutputStream();
		android.net.http.AndroidHttpClient.newInstance("userAgent").execute(new org.apache.http.client.methods.HttpGet(url)).getEntity().writeTo(content);
		content.close();
		return String(content.toString());
	} catch (e) {
		return "";
	}
}

////////////left line

function LEFTMenu(){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var LEFTLayout = new android.widget.LinearLayout(ctx);
            var LEFTScroll = new android.widget.ScrollView(ctx);
            var LEFTLayout1 = new android.widget.LinearLayout(ctx);
            LEFTLayout.setOrientation(1);
            LEFTLayout1.setOrientation(1);

            LEFTScroll.addView(LEFTLayout);
            LEFTLayout1.addView(LEFTScroll);
	                  
	                  LEFTmenu = new android.widget.PopupWindow(LEFTLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/52, ctx.getWindowManager().getDefaultDisplay().getHeight());
LEFTmenu.setBackgroundDrawable(new android.graphics.drawable.GradientDrawable(android.graphics.drawable.GradientDrawable.Orientation.LEFT_RIGHT, [android.graphics.Color.RED, android.graphics.Color.MAGENTA, android.graphics.Color.RED])); 
           LEFTmenu.setAnimationStyle(android.R.style.Animation_Translucent); LEFTmenu.showAtLocation(ctx.getWindow().getDecorView(), GUIPos2 | Gravity.TOP, positionL, 0);
        }catch(error){
            print("Nha l FOUND " + error+"ERRORS");
        }
    }}));
}
////////////right line
function RIGHTMenu(){
    var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
            var RIGHTLayout = new android.widget.LinearLayout(ctx);
            var RIGHTScroll = new android.widget.ScrollView(ctx);
            var RIGHTLayout1 = new android.widget.LinearLayout(ctx);
            RIGHTLayout.setOrientation(1);
            RIGHTLayout1.setOrientation(1);

            RIGHTScroll.addView(RIGHTLayout);
            RIGHTLayout1.addView(RIGHTScroll);
	                  
	                  RIGHTmenu = new android.widget.PopupWindow(RIGHTLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/52, ctx.getWindowManager().getDefaultDisplay().getHeight());
RIGHTmenu.setBackgroundDrawable(new android.graphics.drawable.GradientDrawable(android.graphics.drawable.GradientDrawable.Orientation.LEFT_RIGHT, [android.graphics.Color.RED, android.graphics.Color.MAGENTA, android.graphics.Color.RED])); RIGHTmenu.setAnimationStyle(android.R.style.Animation_Translucent);
            RIGHTmenu.showAtLocation(ctx.getWindow().getDecorView(), GUIPos1 | Gravity.TOP, positionR, 0);
        }catch(error){
            print("Nha R FOUND " + error+"ERRORS");
        }
    }}));
}

/////////////Call Lines////////

function Line1(){
LEFTMenu();
RIGHTMenu();
}
/////////////dismiss lines////////
function Line2(){
 LEFTmenu.dismiss();
RIGHTmenu.dismiss();
}
////////////dismiss then call lines////////
function Line3(){
Line2();
Line1();
}
