export default function Divider() {
    return (
      <div className="relative mx-auto h-16 max-w-wrap" aria-hidden="true">
        <svg
          viewBox="0 0 1160 64"
          preserveAspectRatio="none"
          className="block h-full w-full"
        >
          <polyline
            points="0,52 260,52 340,8 420,52 1160,52"
            fill="none"
            stroke="#1ab5a8"
            strokeWidth="1.4"
            opacity="0.55"
          />
          <polyline
            points="0,58 300,58 380,18 460,58 1160,58"
            fill="none"
            stroke="#c9a84c"
            strokeWidth="1.4"
            opacity="0.55"
          />
        </svg>
      </div>
    );
  }