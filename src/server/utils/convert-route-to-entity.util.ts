const mapping: Record<string, string> = {
  coaches: 'coach',
  'guest-users': 'guest_user',
  organizations: 'organization',
  players: 'player',
  'support-staffs': 'support_staff',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
