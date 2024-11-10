class Project{
    private selector: string;
    private leftButton: HTMLElement;
    private rightButton: HTMLElement;
    private slider: HTMLElement;
    private currentIndex: number = 0;
    private slideLength: number;
    constructor(selector:string){
      this.selector = selector;
      this.slider = document.querySelector(selector+">.carousel>.slider") as HTMLElement;
      this.leftButton = document.querySelector(selector+'>.carousel>button.left') as HTMLElement;
      this.rightButton = document.querySelector(selector+'>.carousel>button.right') as HTMLElement;
      this.slideLength = this.slider.offsetWidth;
  
      this.slider.style.width = `${this.slider.children.length * 100}%`;
  
      this.leftButton.addEventListener('click', () => this.slideLeft());
      this.rightButton.addEventListener('click', () => this.slideRight());
    }
    slideLeft(){
      if(this.currentIndex > 0){
        this.currentIndex--;
        this.slider.style.transform = `translateX(-${this.currentIndex * 100 / this.slider.children.length}%)`;
      }
    }
    slideRight(){
      if(this.currentIndex < this.slider.children.length - 1){
        this.currentIndex++;
        this.slider.style.transform = `translateX(-${this.currentIndex * 100 / this.slider.children.length}%)`;
      }
    }
  }
  
  const dsProject = new Project('#development-south');
  const mwProject = new Project('#milky-ways');