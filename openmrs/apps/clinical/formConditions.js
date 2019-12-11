Bahmni.ConceptSet.FormConditions.rulesOverride  = {
'MTC, Principal reason for treatment incomplete': null,
'MTC, Additional contributing reasons for less than 100% completeness': null,
'TI, Did the patient start treatment': null,
'Followup, New AE reported': null,
'Followup, Reason for next visit': null,
'HDS, Type of TB related surgery': null,
'Baseline, Reason for next assessment': null,
'Baseline, WHO registration group': null,
    'Baseline, Treatment for drug-susceptible TB': function (formName, formFieldValues) {
        var conditions = {enable: [], disable: []};
        var conditionConcept = formFieldValues['Baseline, Treatment for drug-susceptible TB'];
        if (conditionConcept == "True") {
            conditions.enable.push("Baseline, How many drug-susceptible TB treatments", "Baseline, What is the outcome of the last DSTB treatment", "Baseline, Last DSTB Registration ID Details")
        } else {
            conditions.disable.push("Baseline, How many drug-susceptible TB treatments", "Baseline, What is the outcome of the last DSTB treatment", "Baseline, Last DSTB Registration ID Details")
        }
        return conditions;
    },
    'Baseline, Treatment for drug-resistant TB': function (formName, formFieldValues) {
        var conditions = {enable: [], disable: []};
        var conditionConcept = formFieldValues['Baseline, Treatment for drug-resistant TB'];
        if (conditionConcept == "True") {
            conditions.enable.push("Baseline, How many drug-resistant TB treatments", "Baseline, What is the outcome of the last DRTB treatment", "Baseline, Last DRTB Registration ID Details")
        } else {
            conditions.disable.push("Baseline, How many drug-resistant TB treatments", "Baseline, What is the outcome of the last DRTB treatment", "Baseline, Last DRTB Registration ID Details")
        }
        return conditions;
    },

    'Baseline, Start date of past TB treatment': function (formName, formFieldValues) {
        var conceptToEnable = ["Baseline, End date of past TB treatment", "Baseline, Past TB treatment drug regimen", "Baseline, Past TB treatment outcome", "Baseline, Place treatment started"];
        var conditions = {enable: [], disable: []};
        var conditionConcept = formFieldValues['Baseline, Start date of past TB treatment'];
        if (conditionConcept) {
            conditions.enable = conceptToEnable
        } else {
            conditions.disable = conceptToEnable
        }
        return conditions;
    },
    'HDS, TB related surgery while hospitalization': function causeOfDeathLogics(formName, formFieldValues) {
        var conditions = {enable: [], disable: []};
        var conditionConcept = formFieldValues['HDS, TB related surgery while hospitalization'];
        if (conditionConcept == true) {
            conditions.enable.push("HDS, TB related surgery date", "HDS, Type of TB related surgery", "HDS, Indication of TB related surgery")
        } else {
            conditions.disable.push("HDS, TB related surgery date", "HDS, Type of TB related surgery", "HDS, Indication of TB related surgery")
        }
        return conditions;
    },
    'Bacteriology, Xpert MTB result': null,
    'Bacteriology, Culture results': null,
'6m PTO No Change Reason Failed Tx Started New Tx': function (formName, formFieldValues) {
        var conditions = {enable: [], disable: []};
        var conditionConcept = formFieldValues['6m PTO No Change Reason Failed Tx Started New Tx'];
        var conceptToEnable = "6m PTO, If Failed New Tx Number";
        if (conditionConcept) {
            conditions.enable.push(conceptToEnable)
        } else {
            conditions.disable.push(conceptToEnable)
        }
        return conditions;
    },
    '6m PTO, 6 month post treatment outcome': function causeOfDeathLogics(formName, formFieldValues) {
        var conceptToEnable = ["6m PTO No Change Reason Cured No Relapse", "6m PTO No Change Reason Failed Tx not died", "6m PTO No Change Reason Failed Tx Started New Tx"];
        var conditions = {enable: [], disable: []};
        var conditionConcept = formFieldValues['6m PTO, 6 month post treatment outcome'];
        if (conditionConcept == "No change in outcome since end of treatment") {
            conditions.enable = conceptToEnable
        } else {
            conditions.disable = conceptToEnable
        }
        return conditions;
    }
};
