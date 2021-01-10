"use strict";

const { TextAnalyticsClient, AzureKeyCredential } = require("@azure/ai-text-analytics");

const key = '795f93105b2246e19efa71ea4b8be768';
const endpoint = 'https://analizatekstufree.cognitiveservices.azure.com/';
const textAnalyticsClient = new TextAnalyticsClient(endpoint,  new AzureKeyCredential(key));

async function entityRecognition(client){

	    const entityInputs = [
		            "Microsoft was founded by Bill Gates and Paul Allen on April 4, 1975, to develop and sell BASIC interpreters for the Altair 8800",
		            "La sede principal de Microsoft se encuentra en la ciudad de Redmond, a 21 kil�metros de Seattle."
		        ];
	    const entityResults = await client.recognizeEntities(entityInputs);

	    entityResults.forEach(document => {
		            console.log(`Document ID: ${document.id}`);
		            document.entities.forEach(entity => {
				                console.log(`\tName: ${entity.text} \tCategory: ${entity.category} \tSubcategory: ${entity.subCategory ? entity.subCategory : "N/A"}`);
				                console.log(`\tScore: ${entity.confidenceScore}`);
				            });
		        });
}
entityRecognition(textAnalyticsClient);
