// Allows only letters and hyphens, hyphens cannot be at the very beginning or very end
export const NAME_VALIDATOR =
  /^(?=(?:.*[A-Za-z]){2,})(?!-)(?!.*-$)[A-Za-z\s-]{2,}$/;

// Look for characters between <i> and </i>
const ITALIC_VALIDATOR = /<i>(.*?)<\/i>/;
