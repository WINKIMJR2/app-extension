import { Version } from '@microsoft/sp-core-library';
import { IPropertyPaneConfiguration, PropertyPaneTextField, IPropertyPaneField, IPropertyPaneTextFieldProps } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

// Define a custom interface for your web part properties
export interface SimpleTestWebPartProperties {
  description: string; // Define the 'description' property
}

export default class SimpleTestWebPart extends BaseClientSideWebPart<SimpleTestWebPartProperties> {

  public render(): void {
    this.domElement.innerHTML = `
      <div style="padding: 20px; background-color: lightblue;">
        <h1>Hello, ${escape(this.context.pageContext.user.displayName)}!</h1>
        <p>Welcome to your SharePoint Framework Web Part!</p>
        <p>Web part property value: <strong>${escape(this.properties.description)}</strong></p>
      </div>
    `;
  }

  protected onInit(): Promise<void> {
    return Promise.resolve();
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: "Web Part Property Pane"
          },
          groups: [
            {
              groupName: "Basic Settings",
              groupFields: [
                PropertyPaneTextField('description', {
                  label: "Description"
                }) as IPropertyPaneField<IPropertyPaneTextFieldProps> // Explicit cast to the correct type
              ]
            }
          ]
        }
      ]
    };
  }
}
