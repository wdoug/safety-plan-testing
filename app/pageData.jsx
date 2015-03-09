var React = require('react');

function getShelterDetails() {
  return (
    <div>
      <p>
        Here are a list of shelters:
      </p>
      <p>
        -- Shelter details go here --
      </p>
    </div>
  );
}

function getAbusiveRelationshipDetails() {
  return (
    <div>
      <p>
        Here are some resources:
      </p>
      <ol>
        <li>
          Having important phone numbers nearby for you and your children. Numbers to have are the police, hotlines, friends and the local shelter.
        </li>
        <li>
          Friends or neighbors you could tell about the abuse. Ask them to call the police if they hear angry or violent noises. If you have children, teach them how to dial 911. Make up a code word that you can use when you need help.
        </li>
        <li>
          How to get out of your home safely. Practice ways to get out.
        </li>
        <li>
          Safer places in your home where there are exits and no weapons. If you feel abuse is going to happen try to get your abuser to one of these safer places.
        </li>
        <li>
          Any weapons in the house. Think about ways that you could get them out of the house.
        </li>
        <li>
          Even if you do not plan to leave, think of where you could go. Think of how you might leave. Try doing things that get you out of the house - taking out the trash, walking the pet or going to the store. Put together a bag of things you use everyday (see the checklist below). Hide it where it is easy for you to get.
        </li>
        <li>
          Going over your safety plan often.
        </li>
      </ol>
    </div>
  );
}

function getAdditionalResources() {
  return (
    <div>
      <p>
        Additional resources:
      </p>
      <a href="http://www.domesticviolence.org/personalized-safety-plan/">
        domesticviolence.org
      </a>
      <p>
        -- more resources here --
      </p>
    </div>
  );
}

module.exports = {
  "start": {
    "text": "Do you need shelter immediately?",
    "buttons": [{
      "text": "yes",
      "link": "page",
      "params": { "index": "need-shelter" }
    }, {
      "text": "no",
      "link": "page",
      "params": { "index": "question-2" }
    }]
  },
  "need-shelter": {
    "text": getShelterDetails()
  },
  "question-2": {
    "text": "Are you in an abusive relationship?",
    "buttons": [{
      "text": "yes",
      "link": "page",
      "params": { "index": "abusive-relationship" }
    }, {
      "text": "no",
      "link": "page",
      "params": { "index": "additional-resources" }
    }]
  },
  'abusive-relationship': {
    text: getAbusiveRelationshipDetails()
  },
  'additional-resources': {
    text: getAdditionalResources()
  }
};