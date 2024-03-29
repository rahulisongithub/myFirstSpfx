import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './MyfirstspfxWebPart.module.scss';
import * as strings from 'MyfirstspfxWebPartStrings';

export interface IMyfirstspfxWebPartProps {
  description: string;
}

export default class MyfirstspfxWebPart extends BaseClientSideWebPart<IMyfirstspfxWebPartProps> {

  public render(): void {
    this.domElement.innerHTML = `
      <div class="${ styles.myfirstspfx }">
        <div class="${ styles.container }">
          <div class="${ styles.row }">
            <div class="${ styles.column }">
              <span class="${ styles.title }">!!.. SPFX with DevOps..!!</span>
              <p class="${ styles.subTitle }">by !!..Rahul Navale..!!</p>
              <a href="https://aka.ms/spfx" class="${ styles.button }">
                <span>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>`;
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
