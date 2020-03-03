import Controller from '@ember/controller';

export default class AddGistController extends Controller {
  //Dummy data
  gists = [
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
}

