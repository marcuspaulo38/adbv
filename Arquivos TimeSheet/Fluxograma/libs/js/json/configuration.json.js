Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"New Model","publishDate":"05/12/2019 15:06:54","pages":[{"id":"caee245a-00aa-42a1-9738-8d8174c566da","name":"Fluxograma de Apontamento do Timesheet","version":"1.0","author":"F1401106","image":"files\\diagrams\\Fluxograma_de_Apontamento_do_Timesheet.png","isSubprocessPage":false,"elements":[{"id":"f96df09c-4f6a-4a91-8cd5-11baf90a5605","name":"Apontamento","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":384.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"af6c4491-6932-4ef9-95f1-bca90285123d","name":"Event","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":119.0,"y":103.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"eb780bea-3d55-45c5-9b90-3b5b3a091cdc","name":"Processo de Apontamento","elementImage":"files\\bpmnElements\\SubProcess.png","imageBounds":{"points":[{"x":195.0,"y":88.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"isPublished":true,"elementType":"SubProcess","properties":[]},{"id":"73ece598-b05b-4c90-9b62-aeec383673e0","name":"Envia E-mail para aprovador","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":380.0,"y":103.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"56d37ff4-4b63-4208-a222-c79661ba6431","name":"Aprovador avalia apontamento","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":339.0,"y":230.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"024df8bc-5639-4e17-8df8-5f6d83130057","name":"Aprovado ?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":488.0,"y":240.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Envia aviso de rejeição","elementType":"SequenceFlow","properties":[]},{"name":"Sim","elementType":"SequenceFlow","properties":[]}]},{"id":"0ac84893-d0de-4e25-b9cc-013977e912c1","name":"Envia confirmação do apontamento","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":582.0,"y":228.0}],"radius":0.0,"height":64.0,"width":97.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"99fd33f2-1817-4b4a-a744-f8508354e5c1","name":"Event","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":731.0,"y":245.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"39d0aa5b-48a8-4680-8954-9ea2b95066f3","name":"Envia aviso de rejeição","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":463.0,"y":324.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"68ffb7cc-27a6-47ed-b50f-c24e90cd6782","name":"Event","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":602.0,"y":339.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"af1fa896-1052-4158-ba93-169a8068875b","name":"Requerente","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":204.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"2e786b4c-ee7a-4f01-aa76-ff163cb7cfbb","name":"Aprovador","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":224.0}],"radius":0.0,"height":180.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"02bdfdcb-3877-4571-86d3-f09d6972b722","name":"Requerimento","elementImage":"files\\bpmnElements\\Milestone.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":30.0,"width":245.0,"shape":"rect"},"elementType":"Milestone","properties":[],"pageElements":[]},{"id":"0963800e-9c2d-4597-b680-e71277c10218","name":"Aprovação","elementImage":"files\\bpmnElements\\Milestone.png","imageBounds":{"points":[{"x":315.0,"y":20.0}],"radius":0.0,"height":30.0,"width":527.0,"shape":"rect"},"elementType":"Milestone","properties":[],"pageElements":[]}]}],"subPages":[{"id":"eb780bea-3d55-45c5-9b90-3b5b3a091cdc","name":"Processo de Apontamento","image":"files\\diagrams\\Processo_de_Apontamento.png","isSubprocessPage":true,"elements":[{"id":"48682fac-8a65-46fc-b051-e9187abd5992","name":"Event","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":20.0,"y":87.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"e2dfc2b6-560b-409c-b524-1ea38808ff1a","name":"Verifica Usuário Logado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":119.0,"y":60.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"22ad6c26-ea95-4815-9baf-e40e1f664fa6","name":"Existe restrição de Filtro ?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":273.0,"y":70.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"53dfebd0-50b2-46bf-bbf1-8b0aad4cf02b","name":"Pré-filtra campos restritos","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":416.0,"y":60.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"3fb38379-1ea2-40bd-9393-5f6777ff5af0","name":"Registra Apontamento","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":588.0,"y":60.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"0c8051b5-0fa9-41bf-975d-61657a2b008e","name":"Registra Apontamento","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":248.0,"y":186.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"9a55c5cf-a3af-41d4-ba7d-d0d212105c4c","name":"Tipo de Apontamento","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":453.0,"y":196.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Normal","elementType":"SequenceFlow","properties":[]},{"name":"Extra","elementType":"SequenceFlow","properties":[]}]},{"id":"3758bef2-49b0-48cc-ba60-d5554ae5e80d","name":"Verificação de Escala","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":596.0,"y":186.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"4055d53e-3fd5-4adb-b7cb-10b2ce9af841","name":"Possui escala ?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":800.0,"y":243.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"607ddd18-91aa-41f8-b1e6-4d14d44dccda","name":"Verifica  horas apontadas","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":775.0,"y":359.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"ed65cdc2-94bc-4d54-b684-1545fb3ccb41","name":"Verifica se Apontamento foi feito dentro do expediente do colaborador","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":397.5,"y":295.0}],"radius":0.0,"height":111.0,"width":151.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"60db9280-9008-4c24-b98c-301fdc5439ae","name":"Gateway","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":453.0,"y":459.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Fora do Expediente","elementType":"SequenceFlow","properties":[]},{"name":"Dentro do Expediente","elementType":"SequenceFlow","properties":[]}]},{"id":"8a526aa2-41d2-4c5e-9baa-623ea06ad0b9","name":"Avisa que  apontamento foi feito dentro do expediente","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":310.0,"y":464.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"},{"id":"e454f874-6f83-4a0b-adb7-d409d3dc1262","name":"Fora do Expediente","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":458.0,"y":594.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"3d15acce-5394-41b1-ba1f-99ab3243430d","name":"Event","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":993.0,"y":389.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"3e9d8f11-237b-4ade-95f1-6a0928769faa","name":"Apontamento supera escala ?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":800.0,"y":468.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Avisa que o  apontamento supera a escala","elementType":"SequenceFlow","properties":[]},{"name":"Não","elementType":"SequenceFlow","properties":[]}]},{"id":"09cdebd2-64c9-4367-85ea-ce36a8bf31e7","name":"Avisa que o  apontamento supera a escala","elementImage":"files\\bpmnElements\\NoneIntermediate.png","imageBounds":{"points":[{"x":805.0,"y":593.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneIntermediate"}],"parentRef":"caee245a-00aa-42a1-9738-8d8174c566da"}]}],"texts":{"tableOfContents":"Table of Contents","pageNumber":"Page","pageNumberLabelOf":"of","version":"Version","author":"Author","description":"Description","mainPool":"Main Process","mainPoolDescription":"Main Process Description","processDiagrams":"Process Diagrams","processElements":"Process Elements","elements":"Process Elements","defaultElementName":"Element","performers":"Performers","connectors":"Connectors","connector":"Connector","home":"Home","search":"Search","goToParentProcess":"<< Go to Parent Process","visitBizagi":"Visit bizagi.com","contains":"Contains {0} Sub-Processes","showAll":"Show all","fullScreen":"Full screen","zoomIn":"Zoom In","zoomOut":"Zoom Out","close":"Close","menu":"Menu: ","errorPage":"Error when visualizing page","process":"Process","subProcess":"Published Sub-Processes","contain":"Contains","checkAttributes":"Check attributes","checkOverview":"Check overview","unavailableResource":"Unavailable resource","localResource":"Resource can be accessed locally","performer":"Performer","linktoimage":"Link to Image","presentationAction":"Presentation Actions","searchGlobal":"Search all","searchLocal":"Search in this process","searchResults":"No Results Found","titlePage":"Start","emptyElement":"This element has not yet been documented","unsupported":"Your browser does not support content displayed by this page. <br> We recommend you upgrading your browser.","details":"Details","expand":"Expand","mainPoolProperties":"Main Process properties","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"caee245a-00aa-42a1-9738-8d8174c566da","containerName":"Fluxograma de Apontamento do Timesheet","isSubprocess":false,"elements":[{"id":"f96df09c-4f6a-4a91-8cd5-11baf90a5605","value":"Apontamento"},{"id":"af1fa896-1052-4158-ba93-169a8068875b","value":"Requerente"},{"id":"2e786b4c-ee7a-4f01-aa76-ff163cb7cfbb","value":"Aprovador"},{"id":"02bdfdcb-3877-4571-86d3-f09d6972b722","value":"Requerimento"},{"id":"0963800e-9c2d-4597-b680-e71277c10218","value":"Aprovação"},{"id":"af6c4491-6932-4ef9-95f1-bca90285123d","value":""},{"id":"eb780bea-3d55-45c5-9b90-3b5b3a091cdc","value":"Processo de Apontamento"},{"id":"73ece598-b05b-4c90-9b62-aeec383673e0","value":"Envia E-mail para aprovador"},{"id":"56d37ff4-4b63-4208-a222-c79661ba6431","value":"Aprovador avalia apontamento"},{"id":"024df8bc-5639-4e17-8df8-5f6d83130057","value":"Aprovado ?"},{"id":"0ac84893-d0de-4e25-b9cc-013977e912c1","value":"Envia confirmação do apontamento"},{"id":"99fd33f2-1817-4b4a-a744-f8508354e5c1","value":""},{"id":"39d0aa5b-48a8-4680-8954-9ea2b95066f3","value":"Envia aviso de rejeição"},{"id":"68ffb7cc-27a6-47ed-b50f-c24e90cd6782","value":""}]},{"containerId":"eb780bea-3d55-45c5-9b90-3b5b3a091cdc","containerName":"Processo de Apontamento","isSubprocess":true,"elements":[{"id":"e2dfc2b6-560b-409c-b524-1ea38808ff1a","value":"Verifica Usuário Logado"},{"id":"22ad6c26-ea95-4815-9baf-e40e1f664fa6","value":"Existe restrição de Filtro ?"},{"id":"0c8051b5-0fa9-41bf-975d-61657a2b008e","value":"Registra Apontamento"},{"id":"48682fac-8a65-46fc-b051-e9187abd5992","value":""},{"id":"53dfebd0-50b2-46bf-bbf1-8b0aad4cf02b","value":"Pré-filtra campos restritos"},{"id":"3fb38379-1ea2-40bd-9393-5f6777ff5af0","value":"Registra Apontamento"},{"id":"4055d53e-3fd5-4adb-b7cb-10b2ce9af841","value":"Possui escala ?"},{"id":"607ddd18-91aa-41f8-b1e6-4d14d44dccda","value":"Verifica  horas apontadas"},{"id":"9a55c5cf-a3af-41d4-ba7d-d0d212105c4c","value":"Tipo de Apontamento"},{"id":"ed65cdc2-94bc-4d54-b684-1545fb3ccb41","value":"Verifica se Apontamento foi feito dentro do expediente do colaborador"},{"id":"60db9280-9008-4c24-b98c-301fdc5439ae","value":""},{"id":"e454f874-6f83-4a0b-adb7-d409d3dc1262","value":"Fora do Expediente"},{"id":"3758bef2-49b0-48cc-ba60-d5554ae5e80d","value":"Verificação de Escala"},{"id":"3d15acce-5394-41b1-ba1f-99ab3243430d","value":""},{"id":"3e9d8f11-237b-4ade-95f1-6a0928769faa","value":"Apontamento supera escala ?"},{"id":"09cdebd2-64c9-4367-85ea-ce36a8bf31e7","value":"Avisa que o  apontamento supera a escala"},{"id":"8a526aa2-41d2-4c5e-9baa-623ea06ad0b9","value":"Avisa que  apontamento foi feito dentro do expediente"},{"id":"99fe2b3c-6f5a-44e2-9a0b-190e93893d82"},{"id":"79a6d0fe-9733-4959-94f6-62eca06a7cbd"},{"id":"cb696d4d-35a6-4621-9049-e09ae653d6c9"},{"id":"e7178b32-4c1f-43b5-8cfb-2507127b29e2"}]}]}