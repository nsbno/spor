import { defineTokens } from "@chakra-ui/react"

export const animations = defineTokens.animations({
  spin: {
    value: "spin 1s linear infinite",
  },
  ping: {
    value: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
  },
  pulse: {
    value: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
  },
  bounce: {
    value: "bounce 1s infinite",
  },
  "dash-check": {
    value: "dash-check 250ms cubic-bezier(0.65, 0.25, 0.56, 0.96)",
  }
})
