class SearchBar extends HTMLElement {

  connectedCallBack(){
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.querySelector("#searchElement").value;
  }

  render() {
    this.innerHTML = `
    <div class="search-bar" id="search-bar">
      <div class="jumbotron container">         
        <div class="ms-md-1">
          <div class="row justify-content-center">
            <div class="col-md-8">
            
              <h5 class="display-4">Search Film</h5>
              <div class="input-group mb-5">
                <input id="searchElement" class="form-control" type="search" placeholder="Film Title" />
                <button id="searchButtonElement" class="btn btn-info" type="submit" >Search</button>
              </div>
            </div>
          </div>
        </div>     
      </div>
    </div>   
    `;

    this.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
  }
}

customElements.define("search-bar", SearchBar);