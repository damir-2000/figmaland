class Player{
    constructor (option){
        document.querySelector(`.${option} video`).classList.add(`${option}__video`);
        this.selector = {
            player: document.querySelector(`.${option}`),
            video: document.querySelector(`.${option}__video`),
            
        }
        this.navigationClassName = {
            nav : `${option}__nav`,
            playerControls: `${option}-controls`,
            
            play : `${option}-controls__play`,
            centerButton : `${option}__center-btn`,
            screen : `${option}-controls__screen`,
            
            progressBar : `${option}-progress-bar`,
            progressTime : `${option}-progress-bar__time`,
            progressBuffer : `${option}-progress-bar__buffer`,
            
            mute : `${option}-controls__volume-btn`,
            volumeBar:`${option}-controls__volume-bar`,
            volumeLevel:`${option}-controls__volume-bar-progress`,
            
            timeDurationMin : `${option}-time__duration-minute`,
            timeDurationSec : `${option}-time__duration-sec` ,
            timeCurentMin : `${option}-time__curent-minute`,
            timeCurentSec : `${option}-time__curent-sec`,
            
            
            
            setting:`${option}-controls__setting`,
            settingMenu:`${option}-controls__setting-menu`,
            videoSpeed:`${option}__speed`,
            
            videoLoader:`${option}__loader`,
        }
        this.iconClassName = {
            mainClass: 'fas',
            play: 'fa-play',
            pause: 'fa-pause',
            setting: 'fa-cog',
            fullScreen: 'fa-expand',
            smallScreen: 'fa-compress',
            
            volumeUp: 'fa-volume-up',
            volumeDown: 'fa-volume-down',
            volumeOff: 'fa-volume-off',
            volumeMute: 'fa-volume-mute',
            videoLoader: 'line-scale-pulse-out'
        }
        this.selector.player.insertAdjacentHTML('beforeend', `
            <div class="${this.navigationClassName.centerButton} ${this.iconClassName.mainClass} ${this.iconClassName.play}"></div>
            <div class="${this.navigationClassName.videoLoader} ${this.iconClassName.videoLoader}">
            <div></div><div></div><div></div><div></div><div></div>
            </div>
            <div class="${this.navigationClassName.nav}">
            <div class="${this.navigationClassName.progressBar}">
                <div class="${this.navigationClassName.progressTime}"></div>
                <div class="${this.navigationClassName.progressBuffer}"></div>
            </div>
            <div class="${this.navigationClassName.playerControls}">
                <div class="${this.navigationClassName.playerControls}__left">
                    <button class="${this.iconClassName.mainClass} ${this.iconClassName.play} ${this.navigationClassName.playerControls}__btn ${this.navigationClassName.play}"></button>
                    <div class="${this.navigationClassName.playerControls}__volume">
                        <div class="${this.navigationClassName.playerControls}__btn ${this.navigationClassName.mute} ${this.iconClassName.mainClass} ${this.iconClassName.volumeUp}"></div>
                        <div class="${this.navigationClassName.volumeBar}">
                        <div class="${this.navigationClassName.volumeLevel}"></div>
                        </div>
                    </div>
                    <div class="${option}-time">
                        <span class="${option}-time__curent"><span class="${this.navigationClassName.timeCurentMin}">0</span><span>:</span><span class="${this.navigationClassName.timeCurentSec}">00</span></span>
                        <span>/  </span>
                        <span class="${option}-time__duration"><span class="${this.navigationClassName.timeDurationMin}">0</span><span>:</span><span class="${this.navigationClassName.timeDurationSec}">00</span></span>
                    </div>
                </div>
                <div class="${this.navigationClassName.playerControls}__right">
                <button class="${this.iconClassName.mainClass} ${this.iconClassName.setting} ${this.navigationClassName.playerControls}__btn ${this.navigationClassName.setting}"></button>
                <button class="${this.iconClassName.mainClass} ${this.iconClassName.fullScreen} ${this.navigationClassName.playerControls}__btn ${this.navigationClassName.screen}"></button>
                <div class="${this.navigationClassName.settingMenu}">
                    <h5 class="${this.navigationClassName.settingMenu}-title">Скорость</h5>
                    <ul class="${this.navigationClassName.settingMenu}-speed">
                    <li class="${this.navigationClassName.videoSpeed}" speed="2">2</li>
                    <li class="${this.navigationClassName.videoSpeed}" speed="1.5">1.5</li>
                    <li class="${this.navigationClassName.videoSpeed}" speed="1.25">1.25</li>
                    <li class="${this.navigationClassName.videoSpeed} ${this.navigationClassName.videoSpeed}_active" speed="1">Обычная</li>
                    <li class="${this.navigationClassName.videoSpeed}" speed="0.75">0.75</li>
                    <li class="${this.navigationClassName.videoSpeed}" speed="0.5">0.5</li>
                    <li class="${this.navigationClassName.videoSpeed}" speed="0.25">0.25</li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
        `);
        
        this.navigation = {
            nav : document.querySelector(`.${this.navigationClassName.nav}`),
            
            play : document.querySelector(`.${this.navigationClassName.play}`),
            
            centerButton : document.querySelector(`.${this.navigationClassName.centerButton}`),
            
            screen : document.querySelector(`.${this.navigationClassName.screen}`),
            
            progressBar : document.querySelector(`.${this.navigationClassName.progressBar}`),
            progressTime : document.querySelector(`.${this.navigationClassName.progressTime}`),
            progressBuffer : document.querySelector(`.${this.navigationClassName.progressBuffer}`),
            
            mute : document.querySelector(`.${this.navigationClassName.mute}`),
            volumeBar : document.querySelector(`.${this.navigationClassName.volumeBar}`),
            volumeLevel : document.querySelector(`.${this.navigationClassName.volumeLevel}`),
            
            timeDurationMin : document.querySelector(`.${this.navigationClassName.timeDurationMin}`),
            timeDurationSec : document.querySelector(`.${this.navigationClassName.timeDurationSec}`),
            timeCurentMin : document.querySelector(`.${this.navigationClassName.timeCurentMin}`),
            timeCurentSec : document.querySelector(`.${this.navigationClassName.timeCurentSec}`),
            
            
            
            setting : document.querySelector(`.${this.navigationClassName.setting}`),
            settingMenu : document.querySelector(`.${this.navigationClassName.settingMenu}`),
            videoSpeed : document.querySelectorAll(`.${this.navigationClassName.videoSpeed}`),
            
            videoLoader : document.querySelector(`.${this.navigationClassName.videoLoader}`),
            
        }
        
        this.volume = this.selector.video.volume;
        
        this.videoAlready = false;
        this.videoScroll = false;
        this.timer;
        this.mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent);
        this.start();
    }
    
    start(){
        
        /* слушаем нажатие на кнопки   */
        this.selector.player.addEventListener('click', (e) =>{
            
            if (e.target != this.navigation.setting){
                
                this.navigation.settingMenu.classList.remove(`${this.navigationClassName.settingMenu}_active`);
            }
            
            switch (e.target) {
                case this.navigation.play:
                    this.play();
                    break;
                    
                case this.selector.video:
                    if (this.mobile) {
                        
                        if (this.navigation.nav.classList.contains(`${this.navigationClassName.nav}_active`)) {
                            
                            this.play();
                        }
                        clearTimeout(this.timer);
                        if (!this.navigation.nav.classList.contains(`${this.navigationClassName.nav}_active`) && this.videoAlready) {
                            this.navigation.nav.classList.add(`${this.navigationClassName.nav}_active`);
                            
                        }
                        if (!this.selector.video.paused && this.navigation.nav.classList.contains(`${this.navigationClassName.nav}_active`)) {
                            this.timer = setTimeout(() => {
                                this.navigation.nav.classList.remove(`${this.navigationClassName.nav}_active`);
                                
                            }, 2000);
                        }
                    }
                    else{
                        this.play();
                    }
                
                    
                    break;
                    
                case this.navigation.centerButton:
                    this.play();
                    break;
                    
                case this.navigation.screen:
                    this.screen();
                    break;
                    
                case this.navigation.mute:
                    this.mute();
                    
                    break;
                case this.navigation.setting:
                    
                    this.navigation.settingMenu.classList.toggle(`${this.navigationClassName.settingMenu}_active`);
                    
                    break;
                    
            
                default:
                    break;
            }
            if (e.target.classList.contains(this.navigationClassName.videoSpeed)) {
                
                this.speed(e.target)
            }
            
        });
        
        /* смена полноэкранного режима */
        this.selector.player.addEventListener("fullscreenchange", (e) =>{
            if (!document.fullscreenElement) {
                this.navigation.screen.classList.remove(this.iconClassName.smallScreen);
                this.navigation.screen.classList.add(this.iconClassName.fullScreen);
                
                document.body.classList.remove('scroll-stop');
            }
            else{
                this.navigation.screen.classList.remove(this.iconClassName.fullScreen);
                this.navigation.screen.classList.add(this.iconClassName.smallScreen);
                
                document.body.classList.add('scroll-stop');
            }
            
        });
        
        /* двойной клик для полноэкранного режима */
        this.selector.video.addEventListener('dblclick', () =>{
            this.screen();
        });
        
        /* работает при возпроизведении */
        this.selector.video.addEventListener('timeupdate', () =>{
            if (!this.videoScroll) {
                this.navigation.progressTime.style.width = `${this.selector.video.currentTime / this.selector.video.duration * 100}%`;
            }
            
            this.navigation.progressBuffer.style.width = `${this.selector.video.buffered.end(this.selector.video.buffered.length-1) / this.selector.video.duration * 100}%`;
            
            this.navigation.timeCurentMin.innerHTML = Math.floor(this.selector.video.currentTime / 60);
            this.navigation.timeCurentSec.innerHTML = `${Math.floor(this.selector.video.currentTime % 60) < 10 ? '0' : ''}${Math.floor(this.selector.video.currentTime % 60)}`;
            
            this.navigation.timeDurationMin.innerHTML = Math.floor(this.selector.video.duration / 60);
            this.navigation.timeDurationSec.innerHTML = `${Math.floor(this.selector.video.duration % 60) < 10 ? '0' : ''}${Math.floor(this.selector.video.duration % 60)}`;
            
        });
        
        /* работает при загрузке видео данных */
        this.selector.video.addEventListener('progress', () =>{
            if (this.videoAlready && this.selector.video.buffered.length > 0) {
                this.navigation.progressBuffer.style.width = `${this.selector.video.buffered.end(this.selector.video.buffered.length-1) / this.selector.video.duration * 100}%`;
                
            }
                
            
            
        });
        /* запускаеться при нехватке видео данных */
        this.selector.video.addEventListener('waiting', () =>{
            this.navigation.videoLoader.classList.add(`${this.navigationClassName.videoLoader}_active`);
                
        });
        // /* запускаеться при ошибке */
        // this.selector.video.addEventListener('error', () =>{
        //     this.navigation.videoLoader.classList.add(`${this.navigationClassName.videoLoader}_active`);
                
        // });
        /* запускаеться когда загружено достаточно видео данных  чтоб продолжит*/
        this.selector.video.addEventListener('canplaythrough', () =>{
            this.navigation.videoLoader.classList.remove(`${this.navigationClassName.videoLoader}_active`);
                
        });
        
        
        
        /* конец видео */
        this.selector.video.addEventListener('ended', () =>{
            this.selector.video.currentTime = 0;
            
            this.navigation.play.classList.remove(this.iconClassName.pause);
            this.navigation.play.classList.add(this.iconClassName.play);
        });
        
        
        /* Движение курсора */
        this.selector.player.addEventListener('mousemove', () =>{
            clearTimeout(this.timer);
            if (!this.navigation.nav.classList.contains(`${this.navigationClassName.nav}_active`) && this.videoAlready) {
                this.navigation.nav.classList.add(`${this.navigationClassName.nav}_active`);
                
                this.selector.player.style.cursor = 'auto';
                
            }
            if (!this.selector.video.paused && this.navigation.nav.classList.contains(`${this.navigationClassName.nav}_active`)) {
                
                this.timer = setTimeout(() => {
                    
                    this.navigation.nav.classList.remove(`${this.navigationClassName.nav}_active`);
                    
                    this.selector.player.style.cursor = 'none';
                }, 2000);
            }
            
            
        });
        
        if (this.mobile) {
            this.navigation.volumeBar.style.display = 'none';
        }
        else{
            this.volumeBar();
        }
        
        this.progressBar();
        
    }
    play(){
        if (!this.videoAlready) {
            this.navigation.nav.classList.add(`${this.navigationClassName.nav}_active`);
            this.navigation.centerButton.style.display = 'none';
        }
        
        
        this.videoAlready = true;
       if (this.selector.video.paused) {
            this.selector.video.play();
            this.navigation.play.classList.remove(this.iconClassName.play);
            this.navigation.play.classList.add(this.iconClassName.pause);
            
        }
       else{
            this.selector.video.pause();
            this.navigation.play.classList.remove(this.iconClassName.pause);
            this.navigation.play.classList.add(this.iconClassName.play);
            
        }
        
   } 
   
   screen(){
        if (!document.fullscreenElement) {
            this.selector.player.requestFullscreen();
        }
        else{
            document.exitFullscreen();
            
        }
         
   }
    mute(){
        this.navigation.mute.classList.remove(this.iconClassName.volumeUp);
        this.navigation.mute.classList.remove(this.iconClassName.volumeDown);
        this.navigation.mute.classList.remove(this.iconClassName.volumeOff);
        this.navigation.mute.classList.remove(this.iconClassName.volumeMute);
        
        if (!this.selector.video.muted) {
            this.selector.video.muted = true;
           
            
            this.navigation.mute.classList.add(this.iconClassName.volumeMute);
            
        }
        else{
            this.selector.video.muted = false;
            
            if (this.volume > 0.5) {
                this.navigation.mute.classList.add(this.iconClassName.volumeUp);
            }
            else if(this.volume < 0.1){
                this.navigation.mute.classList.add(this.iconClassName.volumeOff);
            }
            else if(this.volume < 0.5){
                this.navigation.mute.classList.add(this.iconClassName.volumeDown);
            }
            
        }
        
    }
    
    progressBar(){
        let context = this;
        this.navigation.progressBar.addEventListener('mousedown', progreesStart);
        this.navigation.progressBar.addEventListener('touchstart', progreesStart);
            
            
        function progreesStart(e) {
            context.videoScroll = true;
        
            context.selector.video.currentTime = (((e.clientX || e.changedTouches[0].clientX)-context.navigation.progressBar.getBoundingClientRect().x) / context.navigation.progressBar.offsetWidth * context.selector.video.duration);
            
            context.navigation.progressTime.style.width = `${((e.clientX || e.changedTouches[0].clientX)-context.navigation.progressBar.getBoundingClientRect().x) / context.navigation.progressBar.offsetWidth * 100}%`;
            
            context.selector.player.addEventListener('mousemove', progressMove);
            context.selector.player.addEventListener('mouseup', progressEnd);
            context.selector.player.addEventListener('mouseleave', progressEnd);
            context.selector.player.addEventListener('touchmove', progressMove);
            context.selector.player.addEventListener('touchend', progressEnd);
            context.selector.player.addEventListener('touchcancel', progressEnd);
        }
        
        function progressMove(e) {
            context.selector.video.currentTime = (((e.clientX || e.changedTouches[0].clientX)-context.navigation.progressBar.getBoundingClientRect().x) / context.navigation.progressBar.offsetWidth * context.selector.video.duration);
            
            context.navigation.progressTime.style.width = `${((e.clientX || e.changedTouches[0].clientX)-context.navigation.progressBar.getBoundingClientRect().x) / context.navigation.progressBar.offsetWidth * 100}%`;
        }
        function progressEnd() {
            context.videoScroll = false;
            context.selector.player.removeEventListener('mousemove', progressMove);
            context.selector.player.removeEventListener('mouseup', progressEnd);
            context.selector.player.removeEventListener('mouseleave', progressEnd);
            context.selector.player.removeEventListener('touchmove', progressMove);
            context.selector.player.removeEventListener('touchend', progressEnd);
            context.selector.player.removeEventListener('touchcancel', progressEnd);
        }
        
        
    }
    volumeBar(){
        let context = this;
        
        
        function icon(lev) {
            context.navigation.mute.classList.remove(context.iconClassName.volumeUp);
            context.navigation.mute.classList.remove(context.iconClassName.volumeDown);
            context.navigation.mute.classList.remove(context.iconClassName.volumeOff);
            context.navigation.mute.classList.remove(context.iconClassName.volumeMute);
            if (lev > 0.5) {
                context.navigation.mute.classList.add(context.iconClassName.volumeUp);
            }
            else if(lev < 0.1){
                context.navigation.mute.classList.add(context.iconClassName.volumeOff);
            }
            else if(lev < 0.5){
                context.navigation.mute.classList.add(context.iconClassName.volumeDown);
            }
        }
        
        icon(this.volume);
        this.navigation.volumeLevel.style.width = `${this.volume * 100}%`;
        
        this.navigation.volumeBar.addEventListener('mousedown', (e) =>{
            this.volume = ((e.clientX-this.navigation.volumeBar.getBoundingClientRect().x) / this.navigation.volumeBar.offsetWidth);
            
            this.navigation.volumeLevel.style.width = `${this.volume * 100}%`;
            this.selector.video.volume = this.volume;
            if (this.selector.video.muted) {
                this.mute();
            }
            icon(this.volume);

            this.selector.player.addEventListener('mousemove', progressMove);
            this.selector.player.addEventListener('mouseup', progressEnd);
            this.selector.player.addEventListener('mouseleave', progressEnd);
            
        })
        function progressMove(e) {
            context.volume = ((e.clientX-context.navigation.volumeBar.getBoundingClientRect().x) / context.navigation.volumeBar.offsetWidth);
            if (context.volume >= 0 && context.volume <= 1) {
                context.navigation.volumeLevel.style.width = `${context.volume * 100}%`;
                
                context.selector.video.volume = context.volume;
                icon(context.volume);
            }
            else if (context.volume > 1) {
                context.volume = 1;
                context.selector.video.volume = context.volume;
                context.navigation.volumeLevel.style.width = `${context.volume * 100}%`;
                icon(context.volume);
            }
            else{
                context.volume = 0;
                context.selector.video.volume = context.volume;
                context.navigation.volumeLevel.style.width = `${context.volume * 100}%`;
                icon(context.volume);
            }
            
        }
        function progressEnd() {
            
            context.selector.player.removeEventListener('mousemove', progressMove);
            context.selector.player.removeEventListener('mousemove', progressEnd);
            context.selector.player.removeEventListener('mouseleave', progressEnd);
        }
        
        
        this.selector.video.addEventListener('wheel', (e)=>{
            if (document.fullscreenElement) {
                this.volume = this.volume - e.deltaY / 2000;
                
                if (this.volume >= 0 && this.volume <= 1) {
                    this.navigation.volumeLevel.style.width = `${this.volume * 100}%`;
                    
                    this.selector.video.volume = this.volume;
                    icon(this.volume);
                }
                else if (this.volume > 1) {
                    this.volume = 1;
                    this.selector.video.volume = this.volume;
                    this.navigation.volumeLevel.style.width = `${this.volume * 100}%`;
                    icon(this.volume);
                }
                else{
                    this.volume = 0;
                    this.selector.video.volume = this.volume;
                    this.navigation.volumeLevel.style.width = `${this.volume * 100}%`;
                    icon(this.volume);
                }
                
            
            }
        });
        
    }
    speed(btn){
        this.selector.video.playbackRate = btn.getAttribute('speed')
        this.navigation.videoSpeed.forEach((element) =>{
            element.classList.remove(`${this.navigationClassName.videoSpeed}_active`)
        })
        btn.classList.add(`${this.navigationClassName.videoSpeed}_active`);
        
         
    }
}




const features__player = new Player("player");


