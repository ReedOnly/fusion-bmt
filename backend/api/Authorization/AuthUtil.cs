using Microsoft.AspNetCore.Http;

namespace api.Authorization
{
    public static class AuthUtil
    {
        public static string GetOID(HttpContext h){
        string oid = h.User.FindFirst("http://schemas.microsoft.com/identity/claims/objectidentifier").Value;
        return oid;
        }
    }
}