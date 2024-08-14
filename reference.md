# Reference

## accounts

<details><summary><code>client.accounts.<a href="/src/api/resources/accounts/client/Client.ts">create</a>({ ...params }) -> DevRev.AccountsCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates an account, which is a record representing a customer or an
organization.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounts.create({
    displayName: "display_name",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.AccountsCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Accounts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.accounts.<a href="/src/api/resources/accounts/client/Client.ts">delete</a>({ ...params }) -> DevRev.AccountsDeleteResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes an account.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounts.delete({
    id: "ACC-12345",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.AccountsDeleteRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Accounts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.accounts.<a href="/src/api/resources/accounts/client/Client.ts">exportPost</a>({ ...params }) -> DevRev.AccountsExportResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Exports a collection of accounts.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounts.exportPost();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.AccountsExportRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Accounts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.accounts.<a href="/src/api/resources/accounts/client/Client.ts">getPost</a>({ ...params }) -> DevRev.AccountsGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves an account's information.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounts.getPost({
    id: "ACC-12345",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.AccountsGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Accounts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.accounts.<a href="/src/api/resources/accounts/client/Client.ts">listPost</a>({ ...params }) -> DevRev.AccountsListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets a list of accounts.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounts.listPost();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.AccountsListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Accounts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.accounts.<a href="/src/api/resources/accounts/client/Client.ts">update</a>({ ...params }) -> DevRev.AccountsUpdateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates an account's information.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounts.update({
    id: "ACC-12345",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.AccountsUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Accounts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## articles

<details><summary><code>client.articles.<a href="/src/api/resources/articles/client/Client.ts">countPost</a>({ ...params }) -> DevRev.ArticlesCountResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get count of articles matching given filter.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.articles.countPost();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.ArticlesCountRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Articles.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.articles.<a href="/src/api/resources/articles/client/Client.ts">createArticle</a>({ ...params }) -> DevRev.ArticlesCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Article is an object which can contain a URL or artifacts in the
resource. It also contains the data regarding the owner, author, status
and published date of the object. This call creates an article.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.articles.createArticle({
    appliesToParts: ["PROD-12345"],
    ownedBy: ["DEVU-12345"],
    resource: {},
    title: "title",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.ArticlesCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Articles.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.articles.<a href="/src/api/resources/articles/client/Client.ts">deleteArticle</a>({ ...params }) -> DevRev.ArticlesDeleteResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes an article.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.articles.deleteArticle({
    id: "ARTICLE-12345",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.ArticlesDeleteRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Articles.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.articles.<a href="/src/api/resources/articles/client/Client.ts">getArticlePost</a>({ ...params }) -> DevRev.ArticlesGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets an article.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.articles.getArticlePost({
    id: "ARTICLE-12345",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.ArticlesGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Articles.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.articles.<a href="/src/api/resources/articles/client/Client.ts">listArticlesPost</a>({ ...params }) -> DevRev.ArticlesListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists a collection of articles.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.articles.listArticlesPost();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.ArticlesListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Articles.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.articles.<a href="/src/api/resources/articles/client/Client.ts">updateArticle</a>({ ...params }) -> DevRev.ArticlesUpdateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates an article.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.articles.updateArticle({
    id: "ARTICLE-12345",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.ArticlesUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Articles.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## artifacts

<details><summary><code>client.artifacts.<a href="/src/api/resources/artifacts/client/Client.ts">getPost</a>({ ...params }) -> DevRev.ArtifactsGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets the requested artifact's information.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.artifacts.getPost({
    id: "ARTIFACT-12345",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.ArtifactsGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Artifacts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.artifacts.<a href="/src/api/resources/artifacts/client/Client.ts">listPost</a>({ ...params }) -> DevRev.ArtifactsListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List the artifacts attached to an object.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.artifacts.listPost();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.ArtifactsListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Artifacts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.artifacts.<a href="/src/api/resources/artifacts/client/Client.ts">locatePost</a>({ ...params }) -> DevRev.ArtifactsLocateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets the download URL for the artifact.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.artifacts.locatePost({
    id: "ARTIFACT-12345",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.ArtifactsLocateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Artifacts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.artifacts.<a href="/src/api/resources/artifacts/client/Client.ts">prepare</a>({ ...params }) -> DevRev.ArtifactsPrepareResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates an artifact and generates an upload URL for its data.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.artifacts.prepare({
    fileName: "file_name",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.ArtifactsPrepareRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Artifacts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.artifacts.<a href="/src/api/resources/artifacts/client/Client.ts">versionsPrepare</a>({ ...params }) -> DevRev.ArtifactsVersionsPrepareResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Prepares a new version for an artifact, returning the URL and form data
to upload the updated file.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.artifacts.versionsPrepare({
    id: "ARTIFACT-12345",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.ArtifactsVersionsPrepareRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Artifacts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## auth-tokens

<details><summary><code>client.authTokens.<a href="/src/api/resources/authTokens/client/Client.ts">create</a>({ ...params }) -> DevRev.AuthTokensCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a JWT corresponding to the requested token type for the
authenticated user.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.authTokens.create();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.AuthTokensCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AuthTokens.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.authTokens.<a href="/src/api/resources/authTokens/client/Client.ts">delete</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Revokes the token that matches the given token ID issued under the
given Dev organization.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.authTokens.delete();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.AuthTokensDeleteRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AuthTokens.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.authTokens.<a href="/src/api/resources/authTokens/client/Client.ts">getPost</a>({ ...params }) -> DevRev.AuthTokensGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets the token metadata corresponding to the given token ID under the
given Dev organization.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.authTokens.getPost({
    tokenId: "token_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.AuthTokensGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AuthTokens.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.authTokens.<a href="/src/api/resources/authTokens/client/Client.ts">listPost</a>({ ...params }) -> DevRev.AuthTokensListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets the token metadata for all the tokens corresponding to the given
token type issued for a given subject.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.authTokens.listPost();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.AuthTokensListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AuthTokens.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.authTokens.<a href="/src/api/resources/authTokens/client/Client.ts">selfDelete</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Revokes all the tokens that matches the given token type created by the
authenticated user.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.authTokens.selfDelete();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.AuthTokensSelfDeleteRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AuthTokens.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.authTokens.<a href="/src/api/resources/authTokens/client/Client.ts">update</a>({ ...params }) -> DevRev.AuthTokensUpdateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates token metadata of a token issued under a given Dev
organization.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.authTokens.update({
    tokenHint: "token_hint",
    tokenId: "token_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.AuthTokensUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AuthTokens.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## code-changes

<details><summary><code>client.codeChanges.<a href="/src/api/resources/codeChanges/client/Client.ts">create</a>({ ...params }) -> DevRev.CodeChangesCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a code change object.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.codeChanges.create({
    key: "value",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.CodeChangesCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CodeChanges.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.codeChanges.<a href="/src/api/resources/codeChanges/client/Client.ts">delete</a>({ ...params }) -> DevRev.CodeChangesDeleteResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a code change object.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.codeChanges.delete({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.CodeChangesDeleteRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CodeChanges.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.codeChanges.<a href="/src/api/resources/codeChanges/client/Client.ts">getPost</a>({ ...params }) -> DevRev.CodeChangesGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets a code change object.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.codeChanges.getPost({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.CodeChangesGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CodeChanges.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.codeChanges.<a href="/src/api/resources/codeChanges/client/Client.ts">listPost</a>({ ...params }) -> DevRev.CodeChangesListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists code change objects.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.codeChanges.listPost();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.CodeChangesListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CodeChanges.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.codeChanges.<a href="/src/api/resources/codeChanges/client/Client.ts">update</a>({ ...params }) -> DevRev.CodeChangesUpdateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a code change object.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.codeChanges.update({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.CodeChangesUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CodeChanges.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## conversations

<details><summary><code>client.conversations.<a href="/src/api/resources/conversations/client/Client.ts">create</a>({ ...params }) -> DevRev.ConversationsCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a conversation.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.conversations.create({
    type: "support",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.ConversationsCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Conversations.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.conversations.<a href="/src/api/resources/conversations/client/Client.ts">delete</a>({ ...params }) -> DevRev.ConversationsDeleteResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes the requested conversation.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.conversations.delete({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.ConversationsDeleteRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Conversations.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.conversations.<a href="/src/api/resources/conversations/client/Client.ts">exportPost</a>({ ...params }) -> DevRev.ConversationsExportResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Exports a collection of conversation items.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.conversations.exportPost();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.ConversationsExportRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Conversations.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.conversations.<a href="/src/api/resources/conversations/client/Client.ts">getPost</a>({ ...params }) -> DevRev.ConversationsGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets the requested conversation's information.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.conversations.getPost({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.ConversationsGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Conversations.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.conversations.<a href="/src/api/resources/conversations/client/Client.ts">listPost</a>({ ...params }) -> DevRev.ConversationsListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists the available conversations.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.conversations.listPost();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.ConversationsListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Conversations.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.conversations.<a href="/src/api/resources/conversations/client/Client.ts">update</a>({ ...params }) -> DevRev.ConversationsUpdateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates the requested conversation.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.conversations.update({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.ConversationsUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Conversations.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## auth-connection

<details><summary><code>client.authConnection.<a href="/src/api/resources/authConnection/client/Client.ts">devOrgAuthConnectionsCreate</a>({ ...params }) -> DevRev.DevOrgAuthConnectionsCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a new enterprise authentication connection for a Dev
organization. This authentication connection will not be enabled by
default for the organization and the user will need to explicitly
enable this. Keep in mind that at a time, only one authentication
connection can be enabled for a Dev organization. At present, only 5
enterprise connections can be created by an organization.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.authConnection.devOrgAuthConnectionsCreate({
    type: "google_apps",
    displayName: "string",
    clientId: "string",
    clientSecret: "string",
    tenantDomain: "string",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.DevOrgAuthConnectionsCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AuthConnection.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.authConnection.<a href="/src/api/resources/authConnection/client/Client.ts">devOrgAuthConnectionsDelete</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes an authentication connection. Only enterprise connections which
are explicitly set up for a Dev organization can be deleted. Default
connections can not be deleted using this method.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.authConnection.devOrgAuthConnectionsDelete({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.DevOrgAuthConnectionsDeleteRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AuthConnection.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.authConnection.<a href="/src/api/resources/authConnection/client/Client.ts">devOrgAuthConnectionsGetPost</a>({ ...params }) -> DevRev.DevOrgAuthConnectionsGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves the details for an authentication connection.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.authConnection.devOrgAuthConnectionsGetPost({
    id: "string",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.DevOrgAuthConnectionsGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AuthConnection.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.authConnection.<a href="/src/api/resources/authConnection/client/Client.ts">devOrgAuthConnectionsListPost</a>({ ...params }) -> DevRev.DevOrgAuthConnectionsListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists all the authentication connections available for a Dev
organization. This list will include both social and enterprise
connections which are either available by default or are explicitly
created by the user.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.authConnection.devOrgAuthConnectionsListPost({
    key: "value",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.Empty`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AuthConnection.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.authConnection.<a href="/src/api/resources/authConnection/client/Client.ts">devOrgAuthConnectionsToggle</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Enable or disable an authentication connection for a Dev organization.
Currently, only 1 authentication connection can be enabled at a time.
When a new authentication connection is enabled, the connection which
is currently enabled for the Dev organization is automatically
disabled.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.authConnection.devOrgAuthConnectionsToggle({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.DevOrgAuthConnectionsToggleRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AuthConnection.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.authConnection.<a href="/src/api/resources/authConnection/client/Client.ts">devOrgAuthConnectionsUpdate</a>({ ...params }) -> DevRev.DevOrgAuthConnectionsUpdateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates an authentication connection.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.authConnection.devOrgAuthConnectionsUpdate({
    type: "google_apps",
    displayName: "string",
    id: "string",
    clientId: "string",
    clientSecret: "string",
    tenantDomain: "string",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.DevOrgAuthConnectionsUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AuthConnection.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## dev-users

<details><summary><code>client.devUsers.<a href="/src/api/resources/devUsers/client/Client.ts">getPost</a>({ ...params }) -> DevRev.DevUsersGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets the requested user's information.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.devUsers.getPost({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.DevUsersGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DevUsers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.devUsers.<a href="/src/api/resources/devUsers/client/Client.ts">identitiesLink</a>({ ...params }) -> DevRev.DevUsersIdentitiesLinkResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Links an external/secondary identity to the Dev user.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.devUsers.identitiesLink({
    devUser: "dev_user",
    id: "id",
    issuer: "issuer",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.DevUsersIdentitiesLinkRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DevUsers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.devUsers.<a href="/src/api/resources/devUsers/client/Client.ts">identitiesUnlink</a>({ ...params }) -> DevRev.DevUsersIdentitiesUnlinkResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Unlinks an external/secondary identity from the Dev user.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.devUsers.identitiesUnlink({
    devUser: "dev_user",
    issuer: "issuer",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.DevUsersIdentitiesUnlinkRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DevUsers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.devUsers.<a href="/src/api/resources/devUsers/client/Client.ts">listPost</a>({ ...params }) -> DevRev.DevUsersListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists users within your organization.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.devUsers.listPost();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.DevUsersListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DevUsers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.devUsers.<a href="/src/api/resources/devUsers/client/Client.ts">selfPost</a>({ ...params }) -> DevRev.DevUsersSelfResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets the authenticated user's information.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.devUsers.selfPost({
    key: "value",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.DevUsersSelfRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DevUsers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.devUsers.<a href="/src/api/resources/devUsers/client/Client.ts">selfUpdate</a>({ ...params }) -> DevRev.DevUsersUpdateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates the authenticated user.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.devUsers.selfUpdate();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.DevUsersSelfUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DevUsers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.devUsers.<a href="/src/api/resources/devUsers/client/Client.ts">update</a>({ ...params }) -> DevRev.DevUsersUpdateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates the user corresponding to the input Id.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.devUsers.update({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.DevUsersUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DevUsers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## engagements

<details><summary><code>client.engagements.<a href="/src/api/resources/engagements/client/Client.ts">countPost</a>({ ...params }) -> DevRev.EngagementsCountResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Counts the engagement records.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.engagements.countPost();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.EngagementsCountRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Engagements.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.engagements.<a href="/src/api/resources/engagements/client/Client.ts">create</a>({ ...params }) -> DevRev.EngagementsCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a new engagement record.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.engagements.create({
    members: ["DEVU-12345"],
    parent: "ACC-12345",
    scheduledDate: new Date("2023-01-01T12:00:00.000Z"),
    title: "title",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.EngagementsCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Engagements.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.engagements.<a href="/src/api/resources/engagements/client/Client.ts">delete</a>({ ...params }) -> DevRev.EngagementsDeleteResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes the engagement record.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.engagements.delete({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.EngagementsDeleteRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Engagements.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.engagements.<a href="/src/api/resources/engagements/client/Client.ts">getPost</a>({ ...params }) -> DevRev.EngagementsGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets the engagement record.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.engagements.getPost({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.EngagementsGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Engagements.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.engagements.<a href="/src/api/resources/engagements/client/Client.ts">listPost</a>({ ...params }) -> DevRev.EngagementsListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists the engagement records.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.engagements.listPost();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.EngagementsListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Engagements.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.engagements.<a href="/src/api/resources/engagements/client/Client.ts">update</a>({ ...params }) -> DevRev.EngagementsUpdateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates the engagement record.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.engagements.update({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.EngagementsUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Engagements.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## event-source

<details><summary><code>client.eventSource.<a href="/src/api/resources/eventSource/client/Client.ts">eventSourcesGetPost</a>({ ...params }) -> DevRev.EventSourceGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets an event source.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.eventSource.eventSourcesGetPost({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.EventSourceGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EventSource.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.eventSource.<a href="/src/api/resources/eventSource/client/Client.ts">eventSourcesScheduleEvent</a>({ ...params }) -> DevRev.EventSourcesScheduleEventResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Schedules an event to be published to the specified event source.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.eventSource.eventSourcesScheduleEvent({
    eventType: "event_type",
    id: "id",
    payload: "payload",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.EventSourcesScheduleEventRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EventSource.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.eventSource.<a href="/src/api/resources/eventSource/client/Client.ts">eventSourcesDeleteScheduledEvent</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes an event scheduled for the specified event source.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.eventSource.eventSourcesDeleteScheduledEvent({
    eventKey: "event_key",
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.EventSourcesDeleteScheduledEventRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EventSource.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.eventSource.<a href="/src/api/resources/eventSource/client/Client.ts">trackEventsPublish</a>({ ...params }) -> DevRev.TrackEventsPublishResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Allows publishing of events (example from plug widget).

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.eventSource.trackEventsPublish({
    eventsList: [
        {
            name: "name",
            payload: {
                key: "value",
            },
        },
    ],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.TrackEventsPublishRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EventSource.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## groups

<details><summary><code>client.groups.<a href="/src/api/resources/groups/client/Client.ts">create</a>({ ...params }) -> DevRev.GroupsCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a new group. A group is a collection of users.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.groups.create({
    description: "description",
    name: "name",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.GroupsCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Groups.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.groups.<a href="/src/api/resources/groups/client/Client.ts">getPost</a>({ ...params }) -> DevRev.GroupsGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets the requested group.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.groups.getPost({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.GroupsGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Groups.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.groups.<a href="/src/api/resources/groups/client/Client.ts">listPost</a>({ ...params }) -> DevRev.GroupsListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists the available groups.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.groups.listPost();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.GroupsListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Groups.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.groups.<a href="/src/api/resources/groups/client/Client.ts">groupMembersAdd</a>({ ...params }) -> DevRev.GroupMembersAddResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Adds a member to a group.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.groups.groupMembersAdd({
    group: "group",
    member: "DEVU-12345",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.GroupMembersAddRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Groups.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.groups.<a href="/src/api/resources/groups/client/Client.ts">groupMembersListPost</a>({ ...params }) -> DevRev.GroupMembersListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists the members in a group.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.groups.groupMembersListPost({
    group: "group",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.GroupMembersListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Groups.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.groups.<a href="/src/api/resources/groups/client/Client.ts">groupMembersRemove</a>({ ...params }) -> DevRev.GroupMembersRemoveResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Removes a member from a group.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.groups.groupMembersRemove({
    group: "group",
    member: "DEVU-12345",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.GroupMembersRemoveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Groups.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.groups.<a href="/src/api/resources/groups/client/Client.ts">update</a>({ ...params }) -> DevRev.GroupsUpdateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates the requested group.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.groups.update({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.GroupsUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Groups.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## operate

<details><summary><code>client.operate.<a href="/src/api/resources/operate/client/Client.ts">incidentsCreate</a>({ ...params }) -> DevRev.IncidentsCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates an incident.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.operate.incidentsCreate({
    title: "title",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.IncidentsCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Operate.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.operate.<a href="/src/api/resources/operate/client/Client.ts">incidentsDelete</a>({ ...params }) -> DevRev.IncidentsDeleteResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes an incident.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.operate.incidentsDelete({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.IncidentsDeleteRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Operate.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.operate.<a href="/src/api/resources/operate/client/Client.ts">incidentsGetPost</a>({ ...params }) -> DevRev.IncidentsGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets an incident.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.operate.incidentsGetPost({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.IncidentsGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Operate.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.operate.<a href="/src/api/resources/operate/client/Client.ts">incidentsGroupPost</a>({ ...params }) -> DevRev.IncidentsGroupResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists collections of incidents by groups.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.operate.incidentsGroupPost({
    groupBy: "group_by",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.IncidentsGroupRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Operate.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.operate.<a href="/src/api/resources/operate/client/Client.ts">incidentsListPost</a>({ ...params }) -> DevRev.IncidentsListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists incidents.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.operate.incidentsListPost();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.IncidentsListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Operate.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.operate.<a href="/src/api/resources/operate/client/Client.ts">incidentsUpdate</a>({ ...params }) -> DevRev.IncidentsUpdateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates an incident.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.operate.incidentsUpdate({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.IncidentsUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Operate.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## keyring

<details><summary><code>client.keyring.<a href="/src/api/resources/keyring/client/Client.ts">keyringsCreateCallbackPost</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

OAuth2 authorization callback.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.keyring.keyringsCreateCallbackPost({
    code: "code",
    state: "state",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.KeyringsCreateCallbackRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Keyring.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## links

<details><summary><code>client.links.<a href="/src/api/resources/links/client/Client.ts">create</a>({ ...params }) -> DevRev.LinksCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a link between two objects to indicate a relationship.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.links.create({
    linkType: DevRev.LinkType.CustomLink,
    source: "string",
    target: "string",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.LinksCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Links.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.links.<a href="/src/api/resources/links/client/Client.ts">delete</a>({ ...params }) -> DevRev.LinksDeleteResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a link.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.links.delete({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.LinksDeleteRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Links.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.links.<a href="/src/api/resources/links/client/Client.ts">getPost</a>({ ...params }) -> DevRev.LinksGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets the requested link's information.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.links.getPost({
    id: "string",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.LinksGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Links.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.links.<a href="/src/api/resources/links/client/Client.ts">listPost</a>({ ...params }) -> DevRev.LinksListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists the available links.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.links.listPost({
    object: "object",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.LinksListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Links.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## slas

<details><summary><code>client.slas.<a href="/src/api/resources/slas/client/Client.ts">metricDefinitionsListPost</a>({ ...params }) -> DevRev.MetricDefinitionsListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists metric definitions matching a filter.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.slas.metricDefinitionsListPost();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.MetricDefinitionsListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Slas.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.slas.<a href="/src/api/resources/slas/client/Client.ts">slaTrackersGetPost</a>({ ...params }) -> DevRev.SlaTrackersGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets an SLA tracker.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.slas.slaTrackersGetPost({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.SlaTrackersGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Slas.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.slas.<a href="/src/api/resources/slas/client/Client.ts">assign</a>({ ...params }) -> DevRev.SlasAssignResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Assigns the SLA to a set of Rev organizations.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.slas.assign({
    revOrgs: ["REV-AbCdEfGh"],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.SlasAssignRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Slas.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.slas.<a href="/src/api/resources/slas/client/Client.ts">create</a>({ ...params }) -> DevRev.SlasCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates an SLA in draft status.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.slas.create({
    name: "name",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.SlasCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Slas.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.slas.<a href="/src/api/resources/slas/client/Client.ts">getPost</a>({ ...params }) -> DevRev.SlasGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets an SLA.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.slas.getPost({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.SlasGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Slas.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.slas.<a href="/src/api/resources/slas/client/Client.ts">listPost</a>({ ...params }) -> DevRev.SlasListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists SLAs matching a filter.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.slas.listPost();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.SlasListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Slas.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.slas.<a href="/src/api/resources/slas/client/Client.ts">transition</a>({ ...params }) -> DevRev.SlasTransitionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Changes the status of an SLA.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.slas.transition({
    id: "id",
    status: DevRev.SlaStatus.Archived,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.SlasTransitionRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Slas.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.slas.<a href="/src/api/resources/slas/client/Client.ts">update</a>({ ...params }) -> DevRev.SlasUpdateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a draft SLA.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.slas.update({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.SlasUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Slas.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## product-usage

<details><summary><code>client.productUsage.<a href="/src/api/resources/productUsage/client/Client.ts">metricsDevrevIngest</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Ingest endpoint for DevRev metrics data from clients.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.productUsage.metricsDevrevIngest({
    metrics: [
        {
            accountRef: "account_ref",
            dataPoints: [
                {
                    timestamp: new Date("2023-01-01T12:00:00.000Z"),
                    value: 1.1,
                },
            ],
            name: "name",
        },
    ],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.MetricsDataIngestRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProductUsage.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.productUsage.<a href="/src/api/resources/productUsage/client/Client.ts">uomsCountPost</a>({ ...params }) -> DevRev.UomsCountResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Counts the number of Unit of Measurements based on the given filters.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.productUsage.uomsCountPost();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.UomsCountRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProductUsage.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.productUsage.<a href="/src/api/resources/productUsage/client/Client.ts">uomsCreate</a>({ ...params }) -> DevRev.UomsCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a Unit of Measurement on a part.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.productUsage.uomsCreate({
    aggregationDetail: {
        aggregationType: DevRev.AggregationDetailAggregationType.Duration,
        uniqueDimension: "string",
    },
    description: "string",
    dimensions: ["string"],
    metricName: "string",
    name: "string",
    partId: "string",
    productId: "string",
    unit: {
        type: DevRev.UnitType.Boolean,
        name: "string",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.UomsCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProductUsage.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.productUsage.<a href="/src/api/resources/productUsage/client/Client.ts">uomsDelete</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a Unit of Measurement.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.productUsage.uomsDelete({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.UomsDeleteRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProductUsage.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.productUsage.<a href="/src/api/resources/productUsage/client/Client.ts">uomsGetPost</a>({ ...params }) -> DevRev.UomsGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets a Unit of Measurement.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.productUsage.uomsGetPost({
    id: "string",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.UomsGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProductUsage.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.productUsage.<a href="/src/api/resources/productUsage/client/Client.ts">uomsListPost</a>({ ...params }) -> DevRev.UomsListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets the Unit of Measurements based on the given filters.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.productUsage.uomsListPost();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.UomsListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProductUsage.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.productUsage.<a href="/src/api/resources/productUsage/client/Client.ts">uomsUpdate</a>({ ...params }) -> DevRev.UomsUpdateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a Unit of Measurement.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.productUsage.uomsUpdate({
    aggregationType: DevRev.AggregationDetailAggregationType.Duration,
    description: "string",
    dimensions: {
        add: ["string"],
        remove: ["string"],
    },
    id: "string",
    isEnabled: true,
    name: "string",
    partId: "string",
    productId: "string",
    unit: "string",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.UomsUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProductUsage.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## notifications

<details><summary><code>client.notifications.<a href="/src/api/resources/notifications/client/Client.ts">send</a>({ ...params }) -> DevRev.NotificationsSendResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Generate a notification.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.notifications.send({
    notifications: [],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.NotificationsSendRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Notifications.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## schedules

<details><summary><code>client.schedules.<a href="/src/api/resources/schedules/client/Client.ts">orgScheduleFragmentsCreate</a>({ ...params }) -> DevRev.OrgScheduleFragmentsCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates an organization schedule fragment.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.schedules.orgScheduleFragmentsCreate({
    from: new Date("2023-01-01T12:00:00.000Z"),
    intervals: [
        {
            from: new Date("2023-01-01T12:00:00.000Z"),
            name: "name",
        },
    ],
    name: "name",
    to: new Date("2023-01-01T12:00:00.000Z"),
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.OrgScheduleFragmentsCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Schedules.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.schedules.<a href="/src/api/resources/schedules/client/Client.ts">orgScheduleFragmentsGetPost</a>({ ...params }) -> DevRev.OrgScheduleFragmentsGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets an organization schedule fragment.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.schedules.orgScheduleFragmentsGetPost({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.OrgScheduleFragmentsGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Schedules.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.schedules.<a href="/src/api/resources/schedules/client/Client.ts">orgScheduleFragmentsTransition</a>({ ...params }) -> DevRev.OrgScheduleFragmentsTransitionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Changes stage of an organization schedule fragment.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.schedules.orgScheduleFragmentsTransition({
    id: "id",
    status: DevRev.OrgScheduleFragmentStatus.Archived,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.OrgScheduleFragmentsTransitionRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Schedules.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.schedules.<a href="/src/api/resources/schedules/client/Client.ts">orgSchedulesCreate</a>({ ...params }) -> DevRev.OrgSchedulesCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates an organization schedule with a default weekly organization
schedule and a list of organization schedule fragments.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.schedules.orgSchedulesCreate({
    name: "name",
    timezone: "timezone",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.OrgSchedulesCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Schedules.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.schedules.<a href="/src/api/resources/schedules/client/Client.ts">orgSchedulesGetPost</a>({ ...params }) -> DevRev.OrgSchedulesGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets an organization schedule.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.schedules.orgSchedulesGetPost({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.OrgSchedulesGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Schedules.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.schedules.<a href="/src/api/resources/schedules/client/Client.ts">orgSchedulesListPost</a>({ ...params }) -> DevRev.OrgSchedulesListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets list of organization schedules.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.schedules.orgSchedulesListPost();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.OrgSchedulesListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Schedules.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.schedules.<a href="/src/api/resources/schedules/client/Client.ts">orgSchedulesSetFuture</a>({ ...params }) -> DevRev.OrgSchedulesSetFutureResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Sets next organization schedule fragment which must begin the day the
last existing fragment ends.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.schedules.orgSchedulesSetFuture({
    id: "id",
    orgScheduleFragmentId: "org_schedule_fragment_id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.OrgSchedulesSetFutureRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Schedules.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.schedules.<a href="/src/api/resources/schedules/client/Client.ts">orgSchedulesTransition</a>({ ...params }) -> DevRev.OrgSchedulesTransitionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Publishes or archives an organization schedule.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.schedules.orgSchedulesTransition({
    id: "id",
    status: DevRev.OrgScheduleStatus.Archived,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.OrgSchedulesTransitionRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Schedules.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.schedules.<a href="/src/api/resources/schedules/client/Client.ts">orgSchedulesUpdate</a>({ ...params }) -> DevRev.OrgSchedulesUpdateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates an organization schedule.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.schedules.orgSchedulesUpdate({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.OrgSchedulesUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Schedules.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## parts

<details><summary><code>client.parts.<a href="/src/api/resources/parts/client/Client.ts">create</a>({ ...params }) -> DevRev.PartsCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates new [part](https://devrev.ai/docs/product/parts).

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.parts.create({
    type: "capability",
    artifacts: ["string"],
    customFields: {
        string: {
            key: "value",
        },
    },
    customSchemaFragments: ["string"],
    description: "string",
    name: "string",
    ownedBy: ["string"],
    parentPart: ["string"],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.PartsCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Parts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.parts.<a href="/src/api/resources/parts/client/Client.ts">delete</a>({ ...params }) -> DevRev.PartsDeleteResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a [part](https://devrev.ai/docs/product/parts).

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.parts.delete({
    id: "PROD-12345",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.PartsDeleteRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Parts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.parts.<a href="/src/api/resources/parts/client/Client.ts">getPost</a>({ ...params }) -> DevRev.PartsGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets a [part's](https://devrev.ai/docs/product/parts) information.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.parts.getPost({
    id: "string",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.PartsGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Parts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.parts.<a href="/src/api/resources/parts/client/Client.ts">listPost</a>({ ...params }) -> DevRev.PartsListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists a collection of [parts](https://devrev.ai/docs/product/parts).

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.parts.listPost();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.PartsListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Parts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.parts.<a href="/src/api/resources/parts/client/Client.ts">update</a>({ ...params }) -> DevRev.PartsUpdateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a [part's](https://devrev.ai/docs/product/parts) information.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.parts.update({
    type: "capability",
    value: {
        string: {
            key: "value",
        },
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.PartsUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Parts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## question-answers

<details><summary><code>client.questionAnswers.<a href="/src/api/resources/questionAnswers/client/Client.ts">createQuestionAnswer</a>({ ...params }) -> DevRev.QuestionAnswersCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a question-answer.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.questionAnswers.createQuestionAnswer({
    answer: "answer",
    appliesToParts: ["PROD-12345"],
    ownedBy: ["DEVU-12345"],
    question: "question",
    status: DevRev.QuestionAnswerStatus.Archived,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.QuestionAnswersCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `QuestionAnswers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.questionAnswers.<a href="/src/api/resources/questionAnswers/client/Client.ts">deleteQuestionAnswer</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a question-answer.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.questionAnswers.deleteQuestionAnswer({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.QuestionAnswersDeleteRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `QuestionAnswers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.questionAnswers.<a href="/src/api/resources/questionAnswers/client/Client.ts">getQuestionAnswerPost</a>({ ...params }) -> DevRev.QuestionAnswersGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets a question-answer.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.questionAnswers.getQuestionAnswerPost({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.QuestionAnswersGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `QuestionAnswers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.questionAnswers.<a href="/src/api/resources/questionAnswers/client/Client.ts">listQuestionAnswersPost</a>({ ...params }) -> DevRev.QuestionAnswersListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists a collection of question-answers.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.questionAnswers.listQuestionAnswersPost();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.QuestionAnswersListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `QuestionAnswers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.questionAnswers.<a href="/src/api/resources/questionAnswers/client/Client.ts">updateQuestionAnswer</a>({ ...params }) -> DevRev.QuestionAnswersUpdateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a question-answer.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.questionAnswers.updateQuestionAnswer({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.QuestionAnswersUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `QuestionAnswers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## rev-orgs

<details><summary><code>client.revOrgs.<a href="/src/api/resources/revOrgs/client/Client.ts">create</a>({ ...params }) -> DevRev.RevOrgsCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a Rev organization in the authenticated user's Dev
organization.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.revOrgs.create({
    displayName: "display_name",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.RevOrgsCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RevOrgs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.revOrgs.<a href="/src/api/resources/revOrgs/client/Client.ts">delete</a>({ ...params }) -> DevRev.RevOrgsDeleteResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes the Rev organization.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.revOrgs.delete({
    id: "REV-AbCdEfGh",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.RevOrgsDeleteRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RevOrgs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.revOrgs.<a href="/src/api/resources/revOrgs/client/Client.ts">getPost</a>({ ...params }) -> DevRev.RevOrgsGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves the Rev organization's information.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.revOrgs.getPost();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.RevOrgsGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RevOrgs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.revOrgs.<a href="/src/api/resources/revOrgs/client/Client.ts">listPost</a>({ ...params }) -> DevRev.RevOrgsListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets the list of Rev organizations' information belonging to the
authenticated user's Dev Organization which the user is also authorized
to access.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.revOrgs.listPost();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.RevOrgsListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RevOrgs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.revOrgs.<a href="/src/api/resources/revOrgs/client/Client.ts">update</a>({ ...params }) -> DevRev.RevOrgsUpdateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates the Rev organization's information.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.revOrgs.update({
    id: "REV-AbCdEfGh",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.RevOrgsUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RevOrgs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## rev-users

<details><summary><code>client.revUsers.<a href="/src/api/resources/revUsers/client/Client.ts">create</a>({ ...params }) -> DevRev.RevUsersCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a Rev user for a Rev organization. Rev user can be a customer
or a lead of an organization.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.revUsers.create();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.RevUsersCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RevUsers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.revUsers.<a href="/src/api/resources/revUsers/client/Client.ts">delete</a>({ ...params }) -> DevRev.RevUsersDeleteResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a Rev user.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.revUsers.delete({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.RevUsersDeleteRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RevUsers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.revUsers.<a href="/src/api/resources/revUsers/client/Client.ts">getPost</a>({ ...params }) -> DevRev.RevUsersGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the Rev user of a Rev organization by its ID.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.revUsers.getPost({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.RevUsersGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RevUsers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.revUsers.<a href="/src/api/resources/revUsers/client/Client.ts">linkRevUserToRevOrg</a>({ ...params }) -> DevRev.LinkRevUserToRevOrgResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Links a rev user to a rev org.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.revUsers.linkRevUserToRevOrg();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.LinkRevUserToRevOrgRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RevUsers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.revUsers.<a href="/src/api/resources/revUsers/client/Client.ts">listPost</a>({ ...params }) -> DevRev.RevUsersListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of all Rev Users belonging to the authenticated user's
Dev Organization.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.revUsers.listPost();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.RevUsersListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RevUsers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.revUsers.<a href="/src/api/resources/revUsers/client/Client.ts">unlinkRevUserFromRevOrg</a>({ ...params }) -> DevRev.UnlinkRevUserFromRevOrgResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Unlinks a rev user from a rev org.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.revUsers.unlinkRevUserFromRevOrg();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.UnlinkRevUserFromRevOrgRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RevUsers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.revUsers.<a href="/src/api/resources/revUsers/client/Client.ts">update</a>({ ...params }) -> DevRev.RevUsersUpdateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a Rev user.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.revUsers.update({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.RevUsersUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RevUsers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## customization

<details><summary><code>client.customization.<a href="/src/api/resources/customization/client/Client.ts">aggregatedSchemaGetPost</a>({ ...params }) -> DevRev.AggregatedSchemaGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets the aggregated schema.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customization.aggregatedSchemaGetPost({
    customSchemaFragmentIds: ["custom_schema_fragment_ids"],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.AggregatedSchemaGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Customization.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customization.<a href="/src/api/resources/customization/client/Client.ts">customSchemaFragmentsGetPost</a>({ ...params }) -> DevRev.CustomSchemaFragmentsGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets a custom schema fragment.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customization.customSchemaFragmentsGetPost({
    id: "string",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.CustomSchemaFragmentsGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Customization.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customization.<a href="/src/api/resources/customization/client/Client.ts">customSchemaFragmentsListPost</a>({ ...params }) -> DevRev.CustomSchemaFragmentsListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists custom schema fragments.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customization.customSchemaFragmentsListPost();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.CustomSchemaFragmentsListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Customization.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customization.<a href="/src/api/resources/customization/client/Client.ts">customSchemaFragmentsSet</a>({ ...params }) -> DevRev.CustomSchemaFragmentsSetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates or updates a custom schema fragment.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customization.customSchemaFragmentsSet({
    type: "app_fragment",
    conditions: [
        {
            string: {
                key: "value",
            },
        },
    ],
    deletedFields: ["string"],
    deprecated: true,
    description: "string",
    fields: [
        {
            fieldType: "array",
            value: {
                key: "value",
            },
        },
    ],
    isCustomLeafType: true,
    leafType: "string",
    app: "string",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.CustomSchemaFragmentsSetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Customization.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customization.<a href="/src/api/resources/customization/client/Client.ts">stockSchemaFragmentsGetPost</a>({ ...params }) -> DevRev.StockSchemaFragmentsGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets a stock schema fragment.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customization.stockSchemaFragmentsGetPost();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.StockSchemaFragmentsGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Customization.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customization.<a href="/src/api/resources/customization/client/Client.ts">stockSchemaFragmentsListPost</a>({ ...params }) -> DevRev.StockSchemaFragmentsListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists stock schema fragments.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customization.stockSchemaFragmentsListPost();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.StockSchemaFragmentsListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Customization.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customization.<a href="/src/api/resources/customization/client/Client.ts">subtypesListPost</a>({ ...params }) -> DevRev.SubtypesListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists subtypes.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customization.subtypesListPost();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.SubtypesListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Customization.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customization.<a href="/src/api/resources/customization/client/Client.ts">customStagesCreate</a>({ ...params }) -> DevRev.CustomStagesCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a custom stage.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customization.customStagesCreate({
    name: "name",
    ordinal: 1,
    state: "state",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.CustomStagesCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Customization.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customization.<a href="/src/api/resources/customization/client/Client.ts">customStagesGetPost</a>({ ...params }) -> DevRev.CustomStagesGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets a custom stage.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customization.customStagesGetPost({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.CustomStagesGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Customization.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customization.<a href="/src/api/resources/customization/client/Client.ts">customStagesListPost</a>({ ...params }) -> DevRev.CustomStagesListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists custom stages.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customization.customStagesListPost();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.CustomStagesListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Customization.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customization.<a href="/src/api/resources/customization/client/Client.ts">customStagesUpdate</a>({ ...params }) -> DevRev.CustomStagesUpdateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a custom stage.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customization.customStagesUpdate({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.CustomStagesUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Customization.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customization.<a href="/src/api/resources/customization/client/Client.ts">customStatesCreate</a>({ ...params }) -> DevRev.CustomStatesCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a custom state.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customization.customStatesCreate({
    name: "name",
    ordinal: 1,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.CustomStatesCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Customization.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customization.<a href="/src/api/resources/customization/client/Client.ts">customStatesGetPost</a>({ ...params }) -> DevRev.CustomStatesGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets a custom state.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customization.customStatesGetPost({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.CustomStatesGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Customization.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customization.<a href="/src/api/resources/customization/client/Client.ts">customStatesListPost</a>({ ...params }) -> DevRev.CustomStatesListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists custom states.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customization.customStatesListPost();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.CustomStatesListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Customization.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customization.<a href="/src/api/resources/customization/client/Client.ts">customStatesUpdate</a>({ ...params }) -> DevRev.CustomStatesUpdateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a custom state.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customization.customStatesUpdate({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.CustomStatesUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Customization.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## search

<details><summary><code>client.search.<a href="/src/api/resources/search/client/Client.ts">corePost</a>({ ...params }) -> DevRev.SearchCoreResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Searches for records based on a given query.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.search.corePost({
    query: "query",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.SearchCoreRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Search.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.search.<a href="/src/api/resources/search/client/Client.ts">hybridPost</a>({ ...params }) -> DevRev.SearchHybridResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Performs search, using a combination of syntactic and semantic search.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.search.hybridPost({
    namespace: DevRev.SearchHybridNamespace.Article,
    query: "query",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.SearchHybridRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Search.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## service-accounts

<details><summary><code>client.serviceAccounts.<a href="/src/api/resources/serviceAccounts/client/Client.ts">getPost</a>({ ...params }) -> DevRev.ServiceAccountsGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets a service account.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.serviceAccounts.getPost({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.ServiceAccountsGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ServiceAccounts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## snap-ins

<details><summary><code>client.snapIns.<a href="/src/api/resources/snapIns/client/Client.ts">resourcesPost</a>({ ...params }) -> DevRev.SnapInsResourcesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets snap-in resources for a user in a snap-in.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.snapIns.resourcesPost({
    id: "id",
    user: "user",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.SnapInsResourcesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SnapIns.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.snapIns.<a href="/src/api/resources/snapIns/client/Client.ts">update</a>({ ...params }) -> DevRev.SnapInsUpdateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a snap-in.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.snapIns.update({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.SnapInsUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SnapIns.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## snap-widgets

<details><summary><code>client.snapWidgets.<a href="/src/api/resources/snapWidgets/client/Client.ts">create</a>({ ...params }) -> DevRev.SnapWidgetsCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a snap widget object.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.snapWidgets.create({
    type: "email_preview",
    name: "string",
    namespace: DevRev.SnapWidgetNamespace.CommentSuggestionReplies,
    status: DevRev.SnapWidgetStatus.Draft,
    bcc: [
        {
            address: "string",
            name: "string",
            user: "string",
        },
    ],
    cc: [
        {
            address: "string",
            name: "string",
            user: "string",
        },
    ],
    from: [
        {
            address: "string",
            name: "string",
            user: "string",
        },
    ],
    htmlBody: "string",
    inReplyTo: "string",
    inlines: [
        {
            artifact: "string",
            contentId: "string",
        },
    ],
    isSpam: true,
    messageId: "string",
    rawEmailArtifact: "string",
    references: ["string"],
    replyTo: [
        {
            address: "string",
            name: "string",
            user: "string",
        },
    ],
    sentTimestamp: new Date("2024-01-15T09:30:00.000Z"),
    subject: "string",
    textBody: "string",
    to: [
        {
            address: "string",
            name: "string",
            user: "string",
        },
    ],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.SnapWidgetsCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SnapWidgets.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## surveys

<details><summary><code>client.surveys.<a href="/src/api/resources/surveys/client/Client.ts">create</a>({ ...params }) -> DevRev.SurveysCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a schema for survey, which includes name and description of
schema.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.surveys.create({
    name: "name",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.SurveysCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Surveys.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.surveys.<a href="/src/api/resources/surveys/client/Client.ts">delete</a>({ ...params }) -> DevRev.SurveysDeleteResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes the specified survey.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.surveys.delete({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.SurveysDeleteRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Surveys.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.surveys.<a href="/src/api/resources/surveys/client/Client.ts">listPost</a>({ ...params }) -> DevRev.SurveysListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List surveys requested by the user.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.surveys.listPost();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.SurveysListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Surveys.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.surveys.<a href="/src/api/resources/surveys/client/Client.ts">responsesListPost</a>({ ...params }) -> DevRev.SurveysResponsesListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List survey responses requested by the user.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.surveys.responsesListPost();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.SurveysResponsesListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Surveys.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.surveys.<a href="/src/api/resources/surveys/client/Client.ts">send</a>({ ...params }) -> DevRev.SurveysSendResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Sends a survey on the specified channels.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.surveys.send({
    email: {
        body: "body",
        recipients: ["recipients"],
        sender: "sender",
        subject: "subject",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.SurveysSendRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Surveys.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.surveys.<a href="/src/api/resources/surveys/client/Client.ts">submit</a>({ ...params }) -> DevRev.SurveysSubmitResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Submits a user response to a survey, which is defined by the survey ID.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.surveys.submit({
    object: "ACC-12345",
    survey: "survey",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.SurveysSubmitRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Surveys.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## sys-users

<details><summary><code>client.sysUsers.<a href="/src/api/resources/sysUsers/client/Client.ts">listPost</a>({ ...params }) -> DevRev.SysUsersListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists system users within your organization.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sysUsers.listPost();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.SysUsersListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SysUsers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.sysUsers.<a href="/src/api/resources/sysUsers/client/Client.ts">update</a>({ ...params }) -> DevRev.SysUsersUpdateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates the system user.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.sysUsers.update({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.SysUsersUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SysUsers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## tags

<details><summary><code>client.tags.<a href="/src/api/resources/tags/client/Client.ts">create</a>({ ...params }) -> DevRev.TagsCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a new tag, which is used to create associations between objects
and a logical concept denoted by the tag's name.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tags.create({
    name: "name",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.TagsCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tags.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tags.<a href="/src/api/resources/tags/client/Client.ts">delete</a>({ ...params }) -> DevRev.TagsDeleteResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a tag.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tags.delete({
    id: "TAG-12345",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.TagsDeleteRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tags.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tags.<a href="/src/api/resources/tags/client/Client.ts">getPost</a>({ ...params }) -> DevRev.TagsGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets a tag's information.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tags.getPost({
    id: "TAG-12345",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.TagsGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tags.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tags.<a href="/src/api/resources/tags/client/Client.ts">listPost</a>({ ...params }) -> DevRev.TagsListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists the available tags.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tags.listPost();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.TagsListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tags.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tags.<a href="/src/api/resources/tags/client/Client.ts">update</a>({ ...params }) -> DevRev.TagsUpdateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a tag's information.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tags.update({
    id: "TAG-12345",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.TagsUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tags.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## timeline-entries

<details><summary><code>client.timelineEntries.<a href="/src/api/resources/timelineEntries/client/Client.ts">create</a>({ ...params }) -> DevRev.TimelineEntriesCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a new entry on an object's timeline.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.timelineEntries.create({
    type: "timeline_comment",
    collections: [DevRev.TimelineEntriesCollection.Discussions],
    expiresAt: new Date("2024-01-15T09:30:00.000Z"),
    labels: ["string"],
    object: "string",
    privateTo: ["string"],
    visibility: DevRev.TimelineEntryVisibility.External,
    artifacts: ["string"],
    body: "string",
    bodyType: DevRev.TimelineCommentBodyType.SnapKit,
    externalRef: "string",
    linkPreviews: ["string"],
    snapKitBody: {},
    snapWidgetBody: ["string"],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.TimelineEntriesCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TimelineEntries.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.timelineEntries.<a href="/src/api/resources/timelineEntries/client/Client.ts">delete</a>({ ...params }) -> DevRev.TimelineEntriesDeleteResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes an entry from an object's timeline.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.timelineEntries.delete({
    id: "don:core:<partition>:devo/<dev-org-id>:ticket/123:timeline_event/<timeline-event-id>",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.TimelineEntriesDeleteRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TimelineEntries.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.timelineEntries.<a href="/src/api/resources/timelineEntries/client/Client.ts">getPost</a>({ ...params }) -> DevRev.TimelineEntriesGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets an entry on an object's timeline.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.timelineEntries.getPost({
    externalRef: "string",
    id: "string",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.TimelineEntriesGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TimelineEntries.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.timelineEntries.<a href="/src/api/resources/timelineEntries/client/Client.ts">listPost</a>({ ...params }) -> DevRev.TimelineEntriesListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists the timeline entries for an object.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.timelineEntries.listPost({
    object: "PROD-12345",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.TimelineEntriesListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TimelineEntries.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.timelineEntries.<a href="/src/api/resources/timelineEntries/client/Client.ts">update</a>({ ...params }) -> DevRev.TimelineEntriesUpdateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates an entry on an object's timeline.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.timelineEntries.update({
    type: "timeline_comment",
    id: "string",
    artifacts: {},
    body: "string",
    bodyType: DevRev.TimelineCommentBodyType.SnapKit,
    linkPreviews: {},
    snapKitBody: {},
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.TimelineEntriesUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TimelineEntries.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## webhooks

<details><summary><code>client.webhooks.<a href="/src/api/resources/webhooks/client/Client.ts">create</a>({ ...params }) -> DevRev.WebhooksCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a new webhook target.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webhooks.create({
    url: "url",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.WebhooksCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Webhooks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.webhooks.<a href="/src/api/resources/webhooks/client/Client.ts">delete</a>({ ...params }) -> DevRev.WebhooksDeleteResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes the requested webhook.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webhooks.delete({
    id: "don:integration:<partition>:devo/<dev-org-id>:webhook/<webhook-id>",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.WebhooksDeleteRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Webhooks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.webhooks.<a href="/src/api/resources/webhooks/client/Client.ts">getPost</a>({ ...params }) -> DevRev.WebhooksGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets the requested webhook's information.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webhooks.getPost({
    id: "don:integration:<partition>:devo/<dev-org-id>:webhook/<webhook-id>",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.WebhooksGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Webhooks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.webhooks.<a href="/src/api/resources/webhooks/client/Client.ts">listPost</a>({ ...params }) -> DevRev.WebhooksListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists the webhooks.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webhooks.listPost({
    key: "value",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.WebhooksListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Webhooks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.webhooks.<a href="/src/api/resources/webhooks/client/Client.ts">update</a>({ ...params }) -> DevRev.WebhooksUpdateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates the requested webhook.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webhooks.update({
    id: "don:integration:<partition>:devo/<dev-org-id>:webhook/<webhook-id>",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.WebhooksUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Webhooks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## works

<details><summary><code>client.works.<a href="/src/api/resources/works/client/Client.ts">create</a>({ ...params }) -> DevRev.WorksCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates new work ([issue](https://devrev.ai/docs/product/build),
[ticket](https://devrev.ai/docs/product/support)) item.
[task](https://docs.devrev.ai/product/tasks) and opportunity work types
are supported in the beta version.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.works.create({
    type: "issue",
    appliesToPart: "string",
    artifacts: ["string"],
    body: "string",
    customFields: {
        string: {
            key: "value",
        },
    },
    customSchemaFragments: ["string"],
    customSchemaSpec: {
        apps: ["string"],
        subtype: "string",
        tenantFragment: true,
        validateRequiredFields: true,
    },
    ownedBy: ["string"],
    reportedBy: ["string"],
    stage: {
        id: "string",
        name: "string",
    },
    stageValidationOptions: ["allow_non_start"],
    tags: [
        {
            id: "string",
            value: "string",
        },
    ],
    targetCloseDate: new Date("2024-01-15T09:30:00.000Z"),
    title: "string",
    developedWith: ["string"],
    priority: DevRev.IssuePriority.P0,
    priorityV2: 1000000,
    sprint: "string",
    targetStartDate: new Date("2024-01-15T09:30:00.000Z"),
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.WorksCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Works.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.works.<a href="/src/api/resources/works/client/Client.ts">delete</a>({ ...params }) -> DevRev.WorksDeleteResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes a work item.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.works.delete({
    id: "ISS-12345",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.WorksDeleteRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Works.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.works.<a href="/src/api/resources/works/client/Client.ts">exportPost</a>({ ...params }) -> DevRev.WorksExportResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Exports a collection of work items.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.works.exportPost();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.WorksExportRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Works.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.works.<a href="/src/api/resources/works/client/Client.ts">getPost</a>({ ...params }) -> DevRev.WorksGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets a work item's information.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.works.getPost({
    id: "string",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.WorksGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Works.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.works.<a href="/src/api/resources/works/client/Client.ts">listPost</a>({ ...params }) -> DevRev.WorksListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists a collection of work items.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.works.listPost();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.WorksListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Works.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.works.<a href="/src/api/resources/works/client/Client.ts">update</a>({ ...params }) -> DevRev.WorksUpdateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a work item's information.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.works.update({
    type: "issue",
    appliesToPart: "string",
    artifacts: {},
    body: "string",
    customFields: {
        string: {
            key: "value",
        },
    },
    customSchemaFragments: ["string"],
    customSchemaSpec: {
        apps: ["string"],
        subtype: "string",
        tenantFragment: true,
        validateRequiredFields: true,
    },
    id: "string",
    ownedBy: {},
    reportedBy: {},
    stage: {
        name: "string",
        stage: "string",
    },
    stageValidationOptions: ["allow_invalid_transition"],
    stagedInfo: {},
    tags: {},
    targetCloseDate: new Date("2024-01-15T09:30:00.000Z"),
    title: "string",
    developedWith: {},
    priority: DevRev.IssuePriority.P0,
    priorityV2: 1000000,
    sprint: "string",
    targetStartDate: new Date("2024-01-15T09:30:00.000Z"),
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `DevRev.WorksUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Works.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>
