export interface ConnectionOptions {
  /**
   * Unique ID of the connection.
   */
  readonly id?: string;

  /**
   * Date and time when the connection was last used, i.e. connected with.
   */
  lastUsed?: Date;

  /**
   * The connection string to connect to the MongoDB instance including all options set by the user.
   */
  connectionString: string;

  /**
   * This setting only exists for compatibility with the `sslCert` property of the legacy connection model.
   * Compass allows users to specify both a certificate as well as a certificate key as individual files
   * which are then mapped to explicit `tlsCertificateFile` and `tlsCertificateKeyFile` driver options.
   * The connection string spec only supports a single `tlsCertificateKeyFile` parameter, however.
   *
   * See https://jira.mongodb.org/browse/COMPASS-5058
   */
  tlsCertificateFile?: string;

  /**
   * If present the connection should be established via an SSH tunnel according to the provided SSH options.
   */
  sshTunnel?: ConnectionSshOptions;

  /**
   * If present the connection is marked as a favorite by the user.
   */
  favorite?: ConnectionFavoriteOptions;
}

export interface ConnectionSshOptions {
  /**
   * Host to establish SSH tunnel to.
   */
  host: string;

  /**
   * Port to establish SSH tunnel to.
   */
  port: number;

  /**
   * Username of the SSH user.
   */
  username: string;

  /**
   * Password for SSH authentication.
   */
  password?: string;

  /**
   * Private key file to use as SSH identity.
   */
  privateKeyFile?: string;

  /**
   * Password for protected `identitiyFile`.
   */
  privateKeyPassphrase?: string;
}

interface ConnectionFavoriteOptions {
  /**
   * User-defined name of the connection.
   */
  name: string;

  /**
   * Hex-code of the user-defined color.
   */
  color?: string;
}
