import { Component, ViewChild} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SmartTextAreaModule, ChatParameters, SmartTextAreaComponent } from 
'@syncfusion/ej2-angular-inputs';
import { getAzureChatAIRequest } from './ai-model';
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SmartTextAreaModule, DropDownListAllModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  @ViewChild('textareaObj') textareaObj!: SmartTextAreaComponent;

  public dropDownChange(args: any): void {
      let selectedRole: string = args.value;
      let selectedPreset: any = this.presets.find((preset: any) => preset.userRole === selectedRole);
      this.textareaObj.userRole = selectedRole;
      this.textareaObj.UserPhrases = selectedPreset.userPhrases;
  };

  public presets: object[] = [
    {
      userRole: "Customer support representative responding to customer queries",
      userPhrases: [
          "Thank you for reaching out to us.",
          "Can you please provide your order number?",
          "We apologize for the inconvenience.",
          "Our team is looking into this issue and will get back to you shortly.",
          "For urgent matters, please call our support line."
      ]
  },
  {
      userRole: "Employee communicating with internal team",
      userPhrases: [
          "Please find the attached report.",
          "Let's schedule a meeting to discuss this further.",
          "Can you provide an update on this task?",
          "I appreciate your prompt response.",
          "Let's collaborate on this project to ensure timely delivery."
      ]
  },
  {
      userRole: "Sales representative responding to client inquiries",
      userPhrases: [
          "Thank you for your interest in our product.",
          "Can I schedule a demo for you?",
          "Please find the pricing details attached.",
          "Our team is excited to work with you.",
          "Let me know if you have any further questions."
      ]
  }
  ];
  public serverAIRequest = async (settings: ChatParameters) => {
    let output = '';
    try {
        const response = await getAzureChatAIRequest(settings) as string;
        output = response;
    } catch (error) {
        console.error("Error:", error);
    }
    return output;
  };
  public defaultPreset: string[] = [
    "Please find the attached report.",
    "Let's schedule a meeting to discuss this further.",
    "Can you provide an update on this task?",
    "I appreciate your prompt response.",
    "Let's collaborate on this project to ensure timely delivery."
  ];
  public rolesData: string[] = [
    "Employee communicating with internal team",
    "Customer support representative responding to customer queries",
    "Sales representative responding to client inquiries"
  ];
  title = 'myangularapp';
}
