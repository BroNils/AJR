/*                      ___
    / \                |     |
  / ∆ \     ___    |     |
 / ___ \   \   \__|     |
/          \   \______  |
* @author AJ170

Made By AJ170 If You Want To Use Any Code Please Ask I Will More Than Likly Let You Contact Me @AJ170_iOS_King (Twitter) or kik.me/AJ170.iPA (KiK)
*/
//R.I.P English
//Remade by GoogleX

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
var first = new android.widget.TextView(ctx);
var Dialogy = new android.app.Dialog(ctx);
var Exit = new android.widget.Button(ctx);

Dialogy.setTitle("Change Log");
Dialogy.setContentView(toplayer);

scroller.addView(Layer);
toplayer.addView(scroller);

toplayer.setOrientation(android.widget.LinearLayout.HORIZONTAL);
Layer.setOrientation(android.widget.LinearLayout.VERTICAL);
Dialogy.show();
Layer.addView(third);
Layer.addView(second);
Layer.addView(another1);
Layer.addView(first);
Layer.addView(Exit);

third.setText("1.2 \n+Translate to Indonesian \n+Changed Track List \n+Added New Menu (YT GLX) \n+Changed AutoUpdate \n+More");
second.setText("\n\n1.3 \n+Added New Menu (ChangeLog) \n+Added Music Dialog \n+More");
another1.setText("\n\n1.4 \n=Bug Fixed \nSorry For The Bug ^-^");
first.setText("\n\nBug ? Message To Me ! \nFacebook: http://www.fb.me/m.rakha.f \nE-Mail: zozbangz@gmail.com \n\nJangan lupa untuk support developers yang asli ya ^-^ ! \nThx to AJ170 & All");
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

function MusicPF() {
    try {
        var upd = new android.app.AlertDialog.Builder(ctx);
        upd.setTitle("Musik");
        upd.setMessage("Kami punya musik player ! \nIngin mendengarkan musik ?");
        upd.setNegativeButton("Tidak", new android.content.DialogInterface.OnClickListener() {
            onClick: function(par1) {
            dialog.dismiss(); 
   }
        });
        upd.setPositiveButton("Ya", new android.content.DialogInterface.OnClickListener() {
            onClick: function(par1) {
				 playMusic();
				 clientMessage("Enjoy your music ^-^");
            }
        });
        var dialog = upd.create();
        dialog.show() 
    }
    catch(err) {
        clientMessage("Error: \n" + err);
    }
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
var version="1.4";
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
                if(err=="JavaException: java.net.UnknownHostException: raw.githubusercontent.com") {
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



Block.defineBlock(255,"§aReinforced §3Planks", [["door",3]],false,false,false)
Block.setDestroyTime(255,1.5)
Item.addCraftRecipe(255,4,0,[5,5,0,280,4,0,0,0,0])

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
scrollText.setText("         Selamat datang "+ Player.getName(Player.getEntity()) +" ! This Mod has remade by GoogleX ! -Thx");
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
scrollText.setTextSize(15);                                                                                  scrollText.setTextColor(android.graphics.Color.GREEN);

 
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
scrollText.setTextSize(15);                                                                                  scrollText.setTextColor(android.graphics.Color.RED);

 
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
                cT13.setText("Hujan Dengan Petir");
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
scrollText.setTextSize(15);                                                                                  scrollText.setTextColor(android.graphics.Color.BLACK);

 
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
scrollText.setTextSize(15);                                                                                  scrollText.setTextColor(android.graphics.Color.MAGENTA);

 
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

android.widget.Toast.makeText(ctx,new android.text.Html.fromHtml("<b><font color=#000000>Hanya bekerja pada </b><font color=#00FF21>Creative"),0).show();
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
scrollText.setTextSize(15);                                                                                  scrollText.setTextColor(android.graphics.Color.YELLOW);

 
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
scrollText.setTextSize(15);                                                                                  scrollText.setTextColor(android.graphics.Color.BLUE);

 
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
scrollText.setTextSize(15);                                                                                  scrollText.setTextColor(android.graphics.Color.GREEN);

 
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
scrollText.setTextSize(15);                                                                                  scrollText.setTextColor(android.graphics.Color.GRAY);

 
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
scrollText.setTextSize(15);                                                                                  scrollText.setTextColor(android.graphics.Color.GRAY);

 
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
scrollText.setTextSize(15);                                                                                  scrollText.setTextColor(android.graphics.Color.GRAY);

 
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
ModPE.langEdit("menu.version"," ©AJModsMCPE");
ModPE.langEdit("menu.copyright"," ©GoogleX");

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
ModPE.langEdit("menu.version"," ©AJModsMCPE");

ModPE.langEdit("menu.copyright"," ©GoogleX");

ModPE.langEdit("menu.play","§1Mulai");

ModPE.langEdit("menu.options","§1Setelan");

ModPE.langEdit("menu.skins","§1Skin");

ModPE.langEdit("deathScreen.message","§1Innalillahi");
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
ModPE.langEdit("menu.version"," ©AJModsMCPE");

ModPE.langEdit("menu.copyright"," ©GoogleX");

ModPE.langEdit("menu.play","§4Mulai");

ModPE.langEdit("menu.options","§4Setelan");

ModPE.langEdit("menu.skins","§4Skin");

ModPE.langEdit("deathScreen.message","§4Innalillahi");
}

//Random Text (GLX)
function randW(x){
	return x[Math.floor(Math.random()*x.length)];
	var loopW=0;
	}
	
//Var for the text (GLX)
var loopW;
var word = {
	messageLocating:["§3Finding Kids To Troll","§eTrying to grief server","§4Grief Is Da Best","§f§kEaster §5Egg","§aDrinking Vodka","§aThanks Jeb_"]
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
MusicPF();
LoadTeleports();
Info();
    clientMessage("§l§3===========================");
clientMessage("§b§l§oWelcome §4§l§o" + Player.getName(Player.getEntity()) + "§b§l§o To §6§l§oAJModsMCPE");
clientMessage("§b§l§oMenu By §6170_Crew");
clientMessage("§b§l§oRemade by §aGoogleX")
clientMessage("§b§l§ox: " + Math.floor(Player.getX()) + " §b§l§oy: " + Math.floor(Player.getY() - 1) + " §b§l§oz: " + Math.floor(Player.getZ()));
clientMessage("§l§3===========================");

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
button26.setTextColor(android.graphics.Color.RED);
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
button37.setTextColor(android.graphics.Color.RED);
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
button36.setTextColor(android.graphics.Color.RED);
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
button19.setTextColor(android.graphics.Color.MAGENTA);
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
button20.setTextColor(android.graphics.Color.MAGENTA);
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
button21.setTextColor(android.graphics.Color.MAGENTA);
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
button23.setTextColor(android.graphics.Color.MAGENTA);
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
button33.setTextColor(android.graphics.Color.MAGENTA);
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
button38.setTextColor(android.graphics.Color.MAGENTA);
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
button39.setText(">Parachute Fall");
button39.setTextColor(android.graphics.Color.MAGENTA);
button39.setChecked(switched39);
button39.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged:
function(){
if(switched39 == false) {
switched39 = true;
clientMessage("Parachute Fall [§4On§f]");
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
}else if(switched39 == true){
switched39 = false;
clientMessage("Parachute Fall [§4Off§f]");
Level.playSound(getPlayerX(), getPlayerY(), getPlayerZ(), "random.pop", 1, 1);
}
}
}));
menuLayout.addView(button39)

var button40 = new android.widget.Switch(ctx);
button40.setText(">Auto Switch");
button40.setTextColor(android.graphics.Color.MAGENTA);
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
button46.setTextColor(android.graphics.Color.MAGENTA);
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
button47.setTextColor(android.graphics.Color.MAGENTA);
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
button48.setTextColor(android.graphics.Color.MAGENTA);
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
button50.setTextColor(android.graphics.Color.MAGENTA);
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
button51.setTextColor(android.graphics.Color.MAGENTA);
button51.setChecked(switched48);
button51.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
onCheckedChanged:
function(){
if(switched48 == false) {
switched48 = true;
clientMessage("Obor [§4On§f]");
android.widget.Toast.makeText(ctx,new android.text.Html.fromHtml("<b><font color=#29FF00>Pegang </b><font color=#FFC000>Torch"),0).show();
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
button52.setTextColor(android.graphics.Color.MAGENTA);
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
button53.setTextColor(android.graphics.Color.MAGENTA);
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
button54.setTextColor(android.graphics.Color.MAGENTA);
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



textview = android.widget.TextView(ctx);            textview.setText("⚠Setelan Game⚠"); 
textview.setTextSize(20);                                                                                  textview.setTextColor(android.graphics.Color.WHITE);
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
scrollText.setText("Nothing Was Here !!!");
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
  android.widget.Toast.makeText(ctx,new android.text.Html.fromHtml("<b><font color=#FFFC00>Start Twerk It Like Miley</b>"),0).show(); menuLayout.addView(bar);




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
droidPE.dismiss();
closeUI.dismiss();
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
    


var backgroundDarkDirtImage1 = "iVBORw0KGgoAAAANSUhEUgAAAMgAAABwCAIAAADUo6jRAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAxBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QkI3RDFFN0MxMkNEMTFFNTlBODBFM0RDODc4ODA0NTUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QkI3RDFFN0IxMkNEMTFFNTlBODBFM0RDODc4ODA0NTUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiBXaW5kb3dzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9IjJGNkM0NkY2QzQ5NzVCQzk2MjlEQkNBM0QyMzc0OThEIiBzdFJlZjpkb2N1bWVudElEPSIyRjZDNDZGNkM0OTc1QkM5NjI5REJDQTNEMjM3NDk4RCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PscXp1UAAJmQSURBVHjapL0HnGXXWSd4wo0v1KuqrqquzlE5O8iW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"
var backgroundDarkDirtImageDecoded1 = new android.graphics.BitmapFactory.decodeByteArray(android.util.Base64.decode(backgroundDarkDirtImage1, 0), 0, android.util.Base64.decode(backgroundDarkDirtImage1, 0).length);
var scaledBackgroundDarkDirtImageDecoded1 = new android.graphics.Bitmap.createBitmap(backgroundDarkDirtImageDecoded1);



//Background
var backgroundDarkDirtImage = "iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABw0lEQVR4nM2WS0/CQBSFPwiPCosS0UhidOnCn+D//yW6kQgJ1RR5KS7aU50DE9wNZ9POdGZ6z7mPua2nx7s9QLna8Bef620wvsqH/GfdclWNB1n36P5ZUQbjNonReri93ANc9CuL58USOGSg79tsDMD79CVY5wq5Mn6+kF4BxYB8I8iX9zcjjn0X3LcOnSP4eckV6Mhnu/4IgElWWTyjslDfPbrd5/KxfK+xEMui9Ao0L+sFACUhw+dpNT/OB8AvQ/kwlj0fDOsf1OfWzH1degXESD4WI1ns9cCjOlb5NsVb9YMsjA2PofQKNL5eLYDDCtbJJ9V88QocMhC8xpOH854lUji9AnqJMStXcwC6xsCZKRbKfpjnQqw+pFfAK1PMZ265Z4PqhOCxJJxfHdBL7L4WfN7zPsb4IFsIFT4fBYRonhPmudd23fPN+iK8TZsfWl05HwXch265dz7yYS+/rtcf74ikkLJkVzNXFiVXoOmKZZHf+57/w6wHxHvAU/DYSq5AEwPOXCg33wC091/BvFdK76LVScV6SCG9AqeYyNenOiE9Y7Hh2SOkV8AnxNz7/WZDXcnG/fnRA7338/2udHIFfgBs9yLA5bCE1QAAAABJRU5ErkJggg==";
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


//20K downloads
var cmdd4 = "iVBORw0KGgoAAAANSUhEUgAAAUAAAABACAYAAABr564eAAAEkElEQVR4nO3dv8sURxzH8c+GxyKgiGIkWIgegmBjhKewSmmTRoUHBH/g/5DKP0IrKxvRWAgPJKlSpLC2eCCJgpWchSCiooiKRYq10FFvvbnZ2Z2Z273v+1U9z93M7Nzesvu57+7eVXVd62tVVc0+AAAjV9d1Ne/x70pPBACGYs394ZLfxsbG8mYDABm4/VszCZIAAZhVSSL5ATBhc3NT0pckSAIEYNZaqMHW1laJeQBAcuvr6zP/u0+6riZIAgRgljcBkvwAjJ3bjzWToEMCBGAWO0AAZrEDBGAWO0AAZrEDBGBW8DrAVTWdPpr7+GRyMMm4bceJbY+P+q433/vfZOV9aa5PK9slCRCAWeYSYOjIVvrIt+pH2KFj/dtGAgRglrkE2FXXmmGzX7O9L3G2XV7XRBs7fvP5tsuNHT+2fepaYOz76evnq6mF2vv0Xc++9tYTMAkQgFlLS4DP9+5c+PwPz15nXX7bs4B9E1aqxNb2+ZCu4/uSX+zZw9D4ofapz1LG9s+9HbQdP3Y9x34SsIIECMCs4gnQJb83d/9Z2G7H8WOS8iXB2JpK7DiprifMZezjL8tQtg+n73r21SitIAECMKtYAmwmv9/eP53b7ujadknSoVuXJUkPz/0qKX9NsKtc1w22Ha9rLa7rfGPntSq6nvXOLdd6XrX3z4cECMCs7Amwmfzu/f92brvz3/8oSfrl5T1J0r7deyRJD3NPMCBUI8mV/GKvC4tNfl2vOwvJPb5vObnuCfadfV622PUcO3/uBQaAFef9XeBUvwniq/25xOdLhJfeTCVJT16+kDT8WiCA4Wr+Joj7fWASIACzstUAQ8nv8rvHC/s/uP2nJOnImZOSll8LBLB6SIAAzCp+J4iv5hcylusCAYwHCRCAWcUSoLvD4+z9O5Kki4ePter335Vr2eYEwDYSIACziiVAd13f/gMHJElXb1xf2H778Z9m/n9799+k85lOp3Mfn0wmSdqXXl7f+fXlW37peXTl5j+0efad11Bf11CQAAGYlS0BurO07nv9fv7rhqQvNb1dp08s7P/q979n2r24+cfMuF2FjojN52Pbl15e7vnFKrUcIAUSIACzitUA3T29sVLX/lIlkFDNK3X/3O2XpW3tsmsy9ondDkrXcEPzG3vNdShIgADMyp4AXc3O3cGx58KpVv227dsrKV3tz6frkbdt0ujbP3V7X//Y9dBXqdpk3/G7zrNvDTf0PpHw0iABAjCrWA3QJbjnnxKdS3Zt+6UWeyQtfT1WrvaxtbWhGvq8+9ZgfQk+9ElgqOtjqEiAAMwq/m0wy/4Wl9Q1ndT9S7VHHm23r77abr9sF4uRAAGYVTwBDkXbI3Hfmkts/9ztY5+PVfp1pk5UvgSV6nWFlhsSe/3f0Guly0YCBGBW9l+Fs4YjLjA8/CocADSYrQHmQvIDxoMECMAsdoAAzGIHCMAsbw3QnTXhbDCAsWqe/W0iAQIwa62u60qSqqqaez1gaA8KAGNFAgRgVlXX9ewDniQIAGPn7gBxn3xJgADM+iYBfn7iUxIEgFXhkp9DAgRg1gfi6KgjHBm81gAAAABJRU5ErkJggg"

//menu button
var cmdd0 = "/9j/4AAQSkZJRgABAQAASABIAAD/7QA4UGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAAA4QklNBCUAAAAAABDUHYzZjwCyBOmACZjs+EJ+/8AAEQgAIgAiAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/bAEMAAgICAgICAwICAwUDAwMFBgUFBQUGCAYGBgYGCAoICAgICAgKCgoKCgoKCgwMDAwMDA4ODg4ODw8PDw8PDw8PD//bAEMBAgICBAQEBwQEBxALCQsQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEP/dAAQAA//aAAwDAQACEQMRAD8A+/tY8W6B4dtVvfEGo22mW7uI1kupkhQuQSFDOVBJAJx1wD6VR0jx/wCD/EEzW+g65Y6lKoyUtrmKZgPcIxNeBfHTwfcfEfwfb6NbXSWhtbxLpnfptSKRCP8Ax+vmHwlc6X8Ar1/EN5qUOriceX5cDfMD61/NWV5Fh8VhHOFRut0ilv21P5nynLMPi8I506jdbpFLftqfpXqvirQ9Ct/teuahb6dBnHmXEqQpn/ecgVj6Z8SvAutXsem6N4i06/u5c7Ibe7hlkbaCxwiOScAEnA6DNfBfiv4uaJ8dNPHhO2caSynf5s5wvHatT4M/Bq78L+NdO8ZRatBfWtl5wYRc5MkLxj9Wrplw1QoYWc8bUcKqTtG2+mmvmdU8io4fCznjqjhVSdo230018z9DPty0fblrhv7R96P7R96+J5z4X68f/9D3Tx1qOPCOqkHB8h/5V+XvgTwdq3xJ1u50uxuhG0RZiXOR1r9Kb57XU7SWwvV8yCdSrrkjIPbIwa4nwt8PPAXgq+k1Lwzpn2O5lGGfz5pM59pHYfpX808McXRy7C1oRT9pK3K7Jr56/ofyNwl4gU8sweIppP2krcrsml63f6M+MviB8Hdf+HWjjWr29SRC23CHBr6v/Zb1N28BuXcsfNPU5rufFPh7w340sP7L8TWn2y2B3bPMkj5+sbKf1o8LeH/DfgqwOmeGbT7HbE7tnmSSc/WRmP610Zvxx9ey76tiE3U5r3srW++/4HTnXiWsflX1XEJutzXuklG333v8j2H+0fej+0feuE/tH3o/tH3r8/5z81+vn//R73J9aMn1pKK/is/znFyfWjJ9aSigBcn1oyfWkooA/9k"

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