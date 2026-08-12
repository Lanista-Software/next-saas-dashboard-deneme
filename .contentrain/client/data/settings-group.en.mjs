export default [
  {
    "id": "settings-access",
    "items": [
      {
        "hint": "Role mapping copy comes from Contentrain.",
        "label": "SSO provider",
        "status": "healthy",
        "value": "Okta"
      },
      {
        "hint": "Localized invite flow messages are review-ready.",
        "label": "Join policy",
        "status": "published",
        "value": "Invite only"
      }
    ],
    "summary": "Structured copy for identity, role naming, and approval UX.",
    "title": "Access policy"
  },
  {
    "id": "settings-localization",
    "items": [
      {
        "hint": "Source of truth for all app copy.",
        "label": "Primary locale",
        "status": "published",
        "value": "en"
      },
      {
        "hint": "Queue tracked with the same content contracts.",
        "label": "Translation backlog",
        "status": "review",
        "value": "23 keys"
      }
    ],
    "summary": "Locale-aware product copy that can be validated before shipping.",
    "title": "Localization coverage"
  },
  {
    "id": "settings-product",
    "items": [
      {
        "hint": "Each prompt is typed and queryable.",
        "label": "Feature prompts",
        "status": "healthy",
        "value": "14 surfaces"
      },
      {
        "hint": "No hardcoded JSX strings remain in core onboarding.",
        "label": "Onboarding states",
        "status": "healthy",
        "value": "7 flows"
      }
    ],
    "summary": "Centralized content for empty states, upgrade prompts, and contextual callouts.",
    "title": "Product messaging"
  }
]
