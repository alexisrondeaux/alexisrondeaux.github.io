import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
BLUE="#4a90d9"; NAVY="#10264a"; GOLD="#c9a45c"; GREY="#8a8f98"; RED="#c0504d"
plt.rcParams.update({"font.family":"DejaVu Sans","font.size":15,"axes.edgecolor":"#cccccc","axes.grid":True,
  "grid.color":"#e6e6e6","axes.spines.top":False,"axes.spines.right":False,"axes.labelcolor":"#555","xtick.color":"#555","ytick.color":"#555"})
def fig(h=6.4):
    f,ax=plt.subplots(figsize=(12.8,h),dpi=100); return f,ax
def finish(f,ax,title,source,path):
    f.suptitle(title,fontweight="bold",fontsize=20,y=0.97)
    f.text(0.01,0.015,source,fontsize=12,color="#555")
    f.tight_layout(rect=(0,0.05,1,0.93)); f.savefig(path); plt.close(f)
