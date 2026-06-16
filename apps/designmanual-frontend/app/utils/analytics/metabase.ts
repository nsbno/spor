/*
 * To add and send a new custom event, follow these steps:
 *
 * 1. Define a new event schema below.
 *    A custom event may have the following fields:
 *    - `event`:
 *       The event type. This must be a unique string literal.
 *       Must be lowercase and snake_case.
 *
 *    - `name`:
 *       Optional.
 *       If your event schema needs to distinguish between events with different names, define all allowed names as a ZodEnum.
 *
 *    - `properties`
 *       Optional.
 *       The properties of the event. This should be a ZodObject and can contain any custom data you want to track.
 *
 * 2. Add the new event schema to the `MetabaseCustomEventSchema` union.
 *
 * 3. Use the `sendCustomEvent` function to send the event.
 *
 * Remember to update the Tracking Plan excel sheet with your new event schema!
 * If you need more information about analytics in metabase and how to define event schemas, see the documentation at https://github.com/nsbno/cdp-metabase.
 */

import { z } from "zod";

import { sendRecordToMetabase } from "./metabaseCore";

// The button_pressed event is a relatively generic event that can be used for tracking button clicks.
// Avoid adding too many optional properties to this event, as it is intended to be used for simple tracking.

const useSearch = z.object({
  event: z.literal("use_search"),
  properties: z.object({
    destination: z.string(),
  }),
});

const component_tab_visited = z.object({
  event: z.literal("component_tab_visited"),
  properties: z.object({
    tab: z.string(),
    component: z.string(),
  }),
});

const content_menu_click = z.object({
  event: z.literal("content_menu_click"),
  properties: z.object({
    url: z.string(),
    title: z.string().optional(),
  }),
});

export const MetabaseCustomEventSchema = z.discriminatedUnion("event", [
  useSearch,
  component_tab_visited,
  content_menu_click,
]);

export type MetabaseCustomEvent = z.infer<typeof MetabaseCustomEventSchema>;

/*
 * Send a custom event to the frontend-analytics endpoint.
 *
 * You should be using this method to send all custom events to Metabase.
 * Make sure to define a schema for any _new_ custom events in this file.
 * Read the documentation at the top of this file for more information.
 *
 * @param event - The event to send to Metabase.
 * @returns A promise that resolves when the event has been sent.
 */
export function sendCustomEvent(event: MetabaseCustomEvent) {
  return sendRecordToMetabase({
    recordModel: "spor",
    record: {
      event: event.event,
      name: "name" in event ? event.name : undefined,
      properties: "properties" in event ? event.properties : undefined,
    },
    recordModelVersion: 1,
  });
}
