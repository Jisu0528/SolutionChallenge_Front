# DrugSafe FrontEnd

## What is DrugSafe?
<img width="317" alt="image" src="https://github.com/hyeok55/solution_challenge_2024/assets/67605795/481a7265-2721-4f0c-8cec-b8a4d4445c10">


The drug problem is serious worldwide. It is a project that helps to inform and prevent the seriousness and risk of drug addiction in order to solve these problems and create a healthier society. DrugSafe provides prediction of the risk of drug abuse and side effects of facial aging when drug abuse is performed, and lists drug mortality, interest, and drugs by type.

## 1. Development environment
- Front: HTML, React, styled-components
- Design: [Figma](https://www.figma.com/file/D3ijoH9T2dxFb7n43t1G9I/Untitled?type=design&node-id=0-1&mode=design&t=JQ16gX9BRNAxPjI9-0)

## 2. Adopted development technology
### React
- Future maintenance and reusability were considered through componentization.
- There were many overlapping parts, such as the search box, so it was possible to save resources through componentization.
### styled-components
- By using conditional styling using props, we were able to apply a style appropriate to the situation.
- When built, classes were given unique names, saving the cost of establishing a naming convention.

## 3. Features of the page
### Main
<table>
  <tbody>
    <th>Search for drugs using the search bar</th>
    <tr>
      <td align="center"><img src="https://github.com/Jisu0528/SolutionChallenge_Front/assets/71203375/ec167094-32f0-46cf-af79-e966577b8024"</td>
    </tr>
  </tbody>
</table>

- If you search the drug name in the search box, you will be taken to a page where you can view detailed information about the drug.
- You can check drug information by quickly navigating to the main page.

<table>
  <tbody>
    <th>chatbot Gemini</th>
    <tr>
      <td align="center"><img src="https://github.com/Jisu0528/SolutionChallenge_Front/assets/71203375/0046887b-a267-4a14-b072-bd3bd3f73f7f"</td>
    </tr>
  </tbody>
</table>

- We implemented a chatbot using Gemini, Google's AI.
- In addition to drug information, it provides information such as withdrawal symptoms management and connection to drug government help centers.

<table>
  <tbody>
    <th>Drug Report</th>
    <tr>
      <td align="center"><img src="https://github.com/Jisu0528/SolutionChallenge_Front/assets/71203375/9b213735-12fe-48f1-8724-b79b3556ec90"</td>
    </tr>
  </tbody>
</table>

- Data analysis was used.
- You can find the latest news related to drugs.

<table>
  <tbody>
    <th>Cases of unintentional drug use</th>
    <tr>
      <td align="center"><img src="https://github.com/Jisu0528/SolutionChallenge_Front/assets/71203375/2f9883c6-53e2-4ef6-8127-51859095a9e9"</td>
    </tr>
  </tbody>
</table>

- People talk about cases where they have unintentionally taken drugs against their will.
- Knowing how to do this in advance can help you avoid unintentional drug use.

### DeathRate
<table>
  <tbody>
    <th>AI Mortality Prediction</th>
    <tr>
      <td align="center"><img src="https://github.com/Jisu0528/SolutionChallenge_Front/assets/71203375/eb062fc5-e50f-4684-b038-9360803bd92c"</td>
    </tr>
  </tbody>
</table>

- Using AI, we predicted the mortality rate when taking drugs.
- You can check the mortality rate by selecting your age, gender, race, and medication.

### AIImage
<table>
  <tbody>
    <th>AI face transformation</th>
    <tr>
      <td align="center"><img src="https://github.com/Jisu0528/SolutionChallenge_Front/assets/71203375/938eb8aa-4776-441b-bdb3-e772f7e51b73"</td>
    </tr>
  </tbody>
</table>

- Using AI, it predicts the face when taking drugs.
- Select a face image by dragging and dropping or select a file, and AI will replace it with your face when taking the drug.
- The face can be downloaded when the predicted drug is taken.

### Drugs
<table>
  <tbody>
    <th>Classification by drug category</th>
    <tr>
      <td align="center"><img src="https://github.com/Jisu0528/SolutionChallenge_Front/assets/71203375/bf7c9516-cbb0-4033-b3dd-088cfc18cb8d"</td>
    </tr>
  </tbody>
</table>

- Because drug treatment varies depending on the type of drug, drugs can be viewed by type.

<table>
  <tbody>
    <th>Search for drugs using the search bar</th>
    <tr>
      <td align="center"><img src="https://github.com/Jisu0528/SolutionChallenge_Front/assets/71203375/495d0361-6342-44c2-aabb-abf6f05b8c31"</td>
    </tr>
  </tbody>
</table>

- If you search the drug name in the search box, you will be taken to a page where you can view detailed information about the drug.

## 4. project structure
```bash
├── public
│   └── index.html
├── src
│   ├── assets
│   │   ├── dropdown.png
│   │   ├── left.png
│   │   └── logo.png
│   │           .
│   │           .
│   │           .
│   ├── components
│   │   ├── death
│   │   │   ├── CheckBox.jsx
│   │   │   └── SelectBox.jsx
│   │   ├── detail
│   │   │   └──ImageBox.jsx
│   │   ├── drugs
│   │   │   ├── DrugItem.jsx
│   │   │   ├── DrugList.jsx
│   │   │   └── TabComponent.jsx
│   │   └── main
│   │   │   ├── CaseItem.jsx
│   │   │   ├── CaseSlide.jsx
│   │   │   ├── chatbot.jsx
│   │   │   ├── Inro.jsx
│   │   │   ├── Report.jsx
│   │   │   ├── SearchBar.jsx
│   │   │   └── UseCase.jsx
│   ├── pages
│   │   ├── AIImage.jsx
│   │   ├── DeathRate.jsx
│   │   ├── Detail.jsx
│   │   ├── Drugs.jsx
│   │   ├── Main.jsx
│   │   └── index.jsx
│   ├── shared
│   │   ├── Footer.jsx
│   │   ├── GlobalStyle.jsx
│   │   ├── Header.jsx
│   │   └── Router.jsx
│   ├── App.jsx
│   ├── index.js
│   └── setupProxy.js
├── .gitignore
├──README.md
├──package-loc.json
└── package.json
``` 
