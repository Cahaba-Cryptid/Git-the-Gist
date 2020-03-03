import Service from '@ember/service';
import {tracked} from '@glimmer/tracking';

export default class GistsInfoService extends Service {

  
  get numberOfGists() {
    return this.gists.length;
  }

  //Dummy data
  @tracked gists = [
    {
      fileName: "Example .hbs file",
      description: "An example of a simple .hbs file.",
      body: "<p>An <strong>example<strong/> for {{username}}</p>"
    }, 
    {
      fileName: "Example JavaScript fuction",
      description: "This is a simple JS function that will print to the console 'Hello World'",
      body: `function sayHello() {
              console.log("Hello World")
            };
            
            sayHello();
            `
    },
    {
      fileName: "Lazy example",
      description: "Super lazy description",
      body: "<h1>I'm lazy.</h1>"
    }
  ]

  addGist(gist){
    this.gists.addObject(gist);
  }
}
