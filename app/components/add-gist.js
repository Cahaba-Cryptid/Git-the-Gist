import Component from '@glimmer/component';
import {action} from "@ember/object";
import {inject as service} from "@ember/service";

export default class AddGistComponent extends Component {
  @service gistsInfo;

  @action
  addFile(body, description, fileName) {
    this.gistsInfo.addFile({body, description, fileName});
  }
}
